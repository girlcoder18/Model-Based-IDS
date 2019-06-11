//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: wheel1.cpp
//
// Code generated for Simulink model 'wheel1'.
//
// Model version                  : 1.32
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Mon Jan  2 19:09:32 2017
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include "wheel1.h"
#include "wheel1_private.h"
#define wheel1_MessageQueueLen         (105)
#define wheel1_MessageQueueLen_k       (51)

real_T rt_atan2d_snf(real_T u0, real_T u1)
{
  real_T y;
  int32_T u0_0;
  int32_T u1_0;
  if (rtIsNaN(u0) || rtIsNaN(u1)) {
    y = (rtNaN);
  } else if (rtIsInf(u0) && rtIsInf(u1)) {
    if (u0 > 0.0) {
      u0_0 = 1;
    } else {
      u0_0 = -1;
    }

    if (u1 > 0.0) {
      u1_0 = 1;
    } else {
      u1_0 = -1;
    }

    y = atan2((real_T)u0_0, (real_T)u1_0);
  } else if (u1 == 0.0) {
    if (u0 > 0.0) {
      y = RT_PI / 2.0;
    } else if (u0 < 0.0) {
      y = -(RT_PI / 2.0);
    } else {
      y = 0.0;
    }
  } else {
    y = atan2(u0, u1);
  }

  return y;
}

real_T rt_powd_snf(real_T u0, real_T u1)
{
  real_T y;
  real_T tmp;
  real_T tmp_0;
  if (rtIsNaN(u0) || rtIsNaN(u1)) {
    y = (rtNaN);
  } else {
    tmp = fabs(u0);
    tmp_0 = fabs(u1);
    if (rtIsInf(u1)) {
      if (tmp == 1.0) {
        y = (rtNaN);
      } else if (tmp > 1.0) {
        if (u1 > 0.0) {
          y = (rtInf);
        } else {
          y = 0.0;
        }
      } else if (u1 > 0.0) {
        y = 0.0;
      } else {
        y = (rtInf);
      }
    } else if (tmp_0 == 0.0) {
      y = 1.0;
    } else if (tmp_0 == 1.0) {
      if (u1 > 0.0) {
        y = u0;
      } else {
        y = 1.0 / u0;
      }
    } else if (u1 == 2.0) {
      y = u0 * u0;
    } else if ((u1 == 0.5) && (u0 >= 0.0)) {
      y = sqrt(u0);
    } else if ((u0 < 0.0) && (u1 > floor(u1))) {
      y = (rtNaN);
    } else {
      y = pow(u0, u1);
    }
  }

  return y;
}

// Model step function
void robot_0ModelClass::step()
{
  real_T rtb_Distance;
  real_T rtb_Sum3;
  boolean_T rtb_Compare;
  real_T Switch;
  real_T q_idx_1;
  real_T q_idx_2;

  // Outputs for Atomic SubSystem: '<Root>/Subscribe'
  // Start for MATLABSystem: '<S4>/SourceBlock' incorporates:
  //   Inport: '<S10>/In1'
  //   MATLABSystem: '<S4>/SourceBlock'

  rtb_Compare = Sub_wheel1_187.getLatestMessage(&wheel1_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S4>/Enabled Subsystem' incorporates:
  //   EnablePort: '<S10>/Enable'

  if (rtb_Compare) {
    wheel1_B.In1 = wheel1_B.varargout_2;
  }

  // End of Outputs for SubSystem: '<S4>/Enabled Subsystem'
  // End of Outputs for SubSystem: '<Root>/Subscribe'

  // MATLAB Function: '<Root>/Conversion'
  //  Convert the quaternion to a yaw angle (zyx euler angle)
  // MATLAB Function 'Conversion': '<S2>:1'
  // '<S2>:1:5' eul = quat2eul([w,x,y,z]);
  rtb_Sum3 = 1.0 / sqrt(((wheel1_B.In1.Pose.Pose.Orientation.W *
    wheel1_B.In1.Pose.Pose.Orientation.W + wheel1_B.In1.Pose.Pose.Orientation.X *
    wheel1_B.In1.Pose.Pose.Orientation.X) + wheel1_B.In1.Pose.Pose.Orientation.Y
    * wheel1_B.In1.Pose.Pose.Orientation.Y) +
                        wheel1_B.In1.Pose.Pose.Orientation.Z *
                        wheel1_B.In1.Pose.Pose.Orientation.Z);
  Switch = wheel1_B.In1.Pose.Pose.Orientation.W * rtb_Sum3;
  q_idx_1 = wheel1_B.In1.Pose.Pose.Orientation.X * rtb_Sum3;
  q_idx_2 = wheel1_B.In1.Pose.Pose.Orientation.Y * rtb_Sum3;
  rtb_Sum3 *= wheel1_B.In1.Pose.Pose.Orientation.Z;

  // Outputs for Enabled SubSystem: '<Root>/Command Velocity Publisher' incorporates:
  //   EnablePort: '<S1>/Enable'

  // Outputs for Enabled SubSystem: '<Root>/Proportional Controller' incorporates:
  //   EnablePort: '<S3>/Enable'

  // Outputs for Atomic SubSystem: '<Root>/Subscribe'
  // Start for MATLABSystem: '<S4>/SourceBlock' incorporates:
  //   MATLABSystem: '<S4>/SourceBlock'

  // '<S2>:1:6' yaw = eul(1);
  if (rtb_Compare) {
    // Sum: '<S3>/Sum1' incorporates:
    //   Constant: '<Root>/Desired Position'
    //   SignalConversion: '<Root>/SigConversion_InsertedFor_Bus Selector3_at_outport_1'

    wheel1_B.Sum1 = wheel1_P.DesiredPosition_Value[1] -
      wheel1_B.In1.Pose.Pose.Position.Y;

    // Sum: '<S3>/Sum' incorporates:
    //   Constant: '<Root>/Desired Position'
    //   SignalConversion: '<Root>/SigConversion_InsertedFor_Bus Selector3_at_outport_0'

    rtb_Distance = wheel1_P.DesiredPosition_Value[0] -
      wheel1_B.In1.Pose.Pose.Position.X;

    // Sum: '<S3>/Sum3' incorporates:
    //   MATLAB Function: '<Root>/Conversion'
    //   Trigonometry: '<S3>/Desired Yaw'

    rtb_Sum3 = rt_atan2d_snf(wheel1_B.Sum1, rtb_Distance) - rt_atan2d_snf
      ((q_idx_1 * q_idx_2 + Switch * rtb_Sum3) * 2.0, ((Switch * Switch +
         q_idx_1 * q_idx_1) - q_idx_2 * q_idx_2) - rtb_Sum3 * rtb_Sum3);

    // Fcn: '<S3>/Distance'
    wheel1_B.Sum1 = rt_powd_snf(rtb_Distance, 2.0) + rt_powd_snf(wheel1_B.Sum1,
      2.0);
    if (wheel1_B.Sum1 < 0.0) {
      wheel1_B.Sum1 = -sqrt(-wheel1_B.Sum1);
    } else {
      wheel1_B.Sum1 = sqrt(wheel1_B.Sum1);
    }

    // End of Fcn: '<S3>/Distance'

    // Switch: '<S3>/Switch' incorporates:
    //   Constant: '<S3>/Constant'
    //   Constant: '<S3>/Stop'
    //   Constant: '<S7>/Constant'
    //   Gain: '<S9>/Slider Gain'
    //   RelationalOperator: '<S7>/Compare'
    //   Switch: '<S3>/Switch1'

    if (wheel1_B.Sum1 <= wheel1_P.DistanceThreshold_const) {
      Switch = wheel1_P.Stop_Value;
      rtb_Sum3 = wheel1_P.Stop_Value;
    } else {
      Switch = wheel1_P.LinearVelocitySlider_gain * wheel1_P.Constant_Value_a;

      // Gain: '<S8>/Slider Gain' incorporates:
      //   Constant: '<S3>/Constant'
      //   Fcn: '<S3>/Bound [-pi,pi]'
      //   Gain: '<S9>/Slider Gain'

      rtb_Sum3 = wheel1_P.GainSlider_gain * rt_atan2d_snf(sin(rtb_Sum3), cos
        (rtb_Sum3));

      // Saturate: '<S3>/Saturation'
      if (rtb_Sum3 > wheel1_P.Saturation_UpperSat) {
        rtb_Sum3 = wheel1_P.Saturation_UpperSat;
      } else {
        if (rtb_Sum3 < wheel1_P.Saturation_LowerSat) {
          rtb_Sum3 = wheel1_P.Saturation_LowerSat;
        }
      }

      // End of Saturate: '<S3>/Saturation'
    }

    // End of Switch: '<S3>/Switch'

    // BusAssignment: '<S1>/Bus Assignment1' incorporates:
    //   Constant: '<S5>/Constant'

    wheel1_B.BusAssignment1 = wheel1_P.Constant_Value_p;
    wheel1_B.BusAssignment1.Linear.X = Switch;
    wheel1_B.BusAssignment1.Angular.Z = rtb_Sum3;

    // Outputs for Atomic SubSystem: '<S1>/Publish2'
    // Start for MATLABSystem: '<S6>/SinkBlock' incorporates:
    //   MATLABSystem: '<S6>/SinkBlock'

    Pub_wheel1_155.publish(&wheel1_B.BusAssignment1);

    // End of Outputs for SubSystem: '<S1>/Publish2'
  }

  // End of Outputs for SubSystem: '<Root>/Subscribe'
  // End of Outputs for SubSystem: '<Root>/Proportional Controller'
  // End of Outputs for SubSystem: '<Root>/Command Velocity Publisher'
}

// Model initialize function
void robot_0ModelClass::initialize()
{
  // Registration code

  // initialize non-finites
  rt_InitInfAndNaN(sizeof(real_T));

  // initialize error status
  rtmSetErrorStatus((&wheel1_M), (NULL));

  // block I/O
  (void) memset(((void *) &wheel1_B), 0,
                sizeof(B_wheel1_T));

  // states (dwork)
  (void) memset((void *)&wheel1_DW, 0,
                sizeof(DW_wheel1_T));

  {
    static const char_T tmp[16] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0', '/',
      'c', 'm', 'd', '_', 'v', 'e', 'l' };

    static const char_T tmp_0[13] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0',
      '/', 'p', 'o', 's', 'e' };

    char_T tmp_1[17];
    char_T tmp_2[14];
    int32_T i;

    // Start for Atomic SubSystem: '<Root>/Subscribe'
    // Start for MATLABSystem: '<S4>/SourceBlock'
    wheel1_DW.obj_d.isInitialized = 0;
    wheel1_DW.obj_d.isInitialized = 1;
    for (i = 0; i < 13; i++) {
      tmp_2[i] = tmp_0[i];
    }

    tmp_2[13] = '\x00';
    Sub_wheel1_187.createSubscriber(tmp_2, wheel1_MessageQueueLen_k);

    // End of Start for MATLABSystem: '<S4>/SourceBlock'
    // End of Start for SubSystem: '<Root>/Subscribe'

    // Start for Enabled SubSystem: '<Root>/Command Velocity Publisher'
    // Start for Atomic SubSystem: '<S1>/Publish2'
    // Start for MATLABSystem: '<S6>/SinkBlock'
    wheel1_DW.obj.isInitialized = 0;
    wheel1_DW.obj.isInitialized = 1;
    for (i = 0; i < 16; i++) {
      tmp_1[i] = tmp[i];
    }

    tmp_1[16] = '\x00';
    Pub_wheel1_155.createPublisher(tmp_1, wheel1_MessageQueueLen);

    // End of Start for MATLABSystem: '<S6>/SinkBlock'
    // End of Start for SubSystem: '<S1>/Publish2'
    // End of Start for SubSystem: '<Root>/Command Velocity Publisher'

    // Start for MATLABSystem: '<Root>/Simulation Rate Control'
    wheel1_DW.obj_c.isInitialized = 0;
    wheel1_DW.obj_c.isInitialized = 1;

    // SystemInitialize for Atomic SubSystem: '<Root>/Subscribe'
    // SystemInitialize for Enabled SubSystem: '<S4>/Enabled Subsystem'
    // SystemInitialize for Outport: '<S10>/Out1'
    wheel1_B.In1 = wheel1_P.Out1_Y0;

    // End of SystemInitialize for SubSystem: '<S4>/Enabled Subsystem'
    // End of SystemInitialize for SubSystem: '<Root>/Subscribe'
  }
}

// Model terminate function
void robot_0ModelClass::terminate()
{
  // Terminate for Atomic SubSystem: '<Root>/Subscribe'
  // Start for MATLABSystem: '<S4>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S4>/SourceBlock'

  if (wheel1_DW.obj_d.isInitialized == 1) {
    wheel1_DW.obj_d.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S4>/SourceBlock'
  // End of Terminate for SubSystem: '<Root>/Subscribe'

  // Terminate for Enabled SubSystem: '<Root>/Command Velocity Publisher'
  // Terminate for Atomic SubSystem: '<S1>/Publish2'
  // Start for MATLABSystem: '<S6>/SinkBlock' incorporates:
  //   Terminate for MATLABSystem: '<S6>/SinkBlock'

  if (wheel1_DW.obj.isInitialized == 1) {
    wheel1_DW.obj.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S6>/SinkBlock'
  // End of Terminate for SubSystem: '<S1>/Publish2'
  // End of Terminate for SubSystem: '<Root>/Command Velocity Publisher'

  // Start for MATLABSystem: '<Root>/Simulation Rate Control' incorporates:
  //   Terminate for MATLABSystem: '<Root>/Simulation Rate Control'

  if (wheel1_DW.obj_c.isInitialized == 1) {
    wheel1_DW.obj_c.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<Root>/Simulation Rate Control'
}

// Constructor
robot_0ModelClass::robot_0ModelClass()
{
  static const P_wheel1_T wheel1_P_temp = {
    0.5,                               // Mask Parameter: DistanceThreshold_const
                                       //  Referenced by: '<S7>/Constant'

    5.0,                               // Mask Parameter: GainSlider_gain
                                       //  Referenced by: '<S8>/Slider Gain'

    1.0,                               // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S9>/Slider Gain'


    {
      {
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U }
      ,                                // ChildFrameId

      {
        0U,                            // CurrentLength
        0U                             // ReceivedLength
      },                               // ChildFrameId_SL_Info

      {
        0U,                            // Seq

        {
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U }
        ,                              // FrameId

        {
          0U,                          // CurrentLength
          0U                           // ReceivedLength
        },                             // FrameId_SL_Info

        {
          0.0,                         // Sec
          0.0                          // Nsec
        }                              // Stamp
      },                               // Header

      {
        {
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }
        ,                              // Covariance

        {
          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          },                           // Position

          {
            0.0,                       // X
            0.0,                       // Y
            0.0,                       // Z
            0.0                        // W
          }                            // Orientation
        }                              // Pose
      },                               // Pose

      {
        {
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }
        ,                              // Covariance

        {
          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          },                           // Linear

          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          }                            // Angular
        }                              // Twist
      }                                // Twist
    },                                 // Computed Parameter: Out1_Y0
                                       //  Referenced by: '<S10>/Out1'


    {
      {
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
        0U, 0U }
      ,                                // ChildFrameId

      {
        0U,                            // CurrentLength
        0U                             // ReceivedLength
      },                               // ChildFrameId_SL_Info

      {
        0U,                            // Seq

        {
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U, 0U,
          0U, 0U }
        ,                              // FrameId

        {
          0U,                          // CurrentLength
          0U                           // ReceivedLength
        },                             // FrameId_SL_Info

        {
          0.0,                         // Sec
          0.0                          // Nsec
        }                              // Stamp
      },                               // Header

      {
        {
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }
        ,                              // Covariance

        {
          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          },                           // Position

          {
            0.0,                       // X
            0.0,                       // Y
            0.0,                       // Z
            0.0                        // W
          }                            // Orientation
        }                              // Pose
      },                               // Pose

      {
        {
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
          0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 }
        ,                              // Covariance

        {
          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          },                           // Linear

          {
            0.0,                       // X
            0.0,                       // Y
            0.0                        // Z
          }                            // Angular
        }                              // Twist
      }                                // Twist
    },                                 // Computed Parameter: Constant_Value
                                       //  Referenced by: '<S4>/Constant'


    {
      {
        0.0,                           // X
        0.0,                           // Y
        0.0                            // Z
      },                               // Linear

      {
        0.0,                           // X
        0.0,                           // Y
        0.0                            // Z
      }                                // Angular
    },                                 // Computed Parameter: Constant_Value_p
                                       //  Referenced by: '<S5>/Constant'

    0.5,                               // Expression: 0.5
                                       //  Referenced by: '<S3>/Saturation'

    -0.5,                              // Expression: -0.5
                                       //  Referenced by: '<S3>/Saturation'

    0.0,                               // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S3>/Linear Velocity (v)'

    0.0,                               // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S3>/Angular Velocity (w)'

    1.0,                               // Expression: 1
                                       //  Referenced by: '<S3>/Constant'

    0.0,                               // Expression: 0
                                       //  Referenced by: '<S3>/Stop'


    //  Expression: [-1 0]
    //  Referenced by: '<Root>/Desired Position'

    { -1.0, 0.0 }
  };                                   // Modifiable parameters

  // Initialize tunable parameters
  wheel1_P = wheel1_P_temp;
}

// Destructor
robot_0ModelClass::~robot_0ModelClass()
{
  // Currently there is no destructor body generated.
}

// Real-Time Model get method
RT_MODEL_wheel1_T * robot_0ModelClass::getRTM()
{
  return (&wheel1_M);
}

//
// File trailer for generated code.
//
// [EOF]
//
