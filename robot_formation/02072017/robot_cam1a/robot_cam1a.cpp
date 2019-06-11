//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_cam1a.cpp
//
// Code generated for Simulink model 'robot_cam1a'.
//
// Model version                  : 1.26
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Tue Feb  7 18:31:10 2017
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include "robot_cam1a.h"
#include "robot_cam1a_private.h"
#define robot_cam1a_MessageQueueLen    (105)
#define robot_cam1a_MessageQueueLen_k  (1)

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

// Model step function
void robot_0ModelClass::step()
{
  boolean_T varargout_1;
  real_T rtb_Sum1;
  real_T rtb_Sum;
  real_T rtb_Sum3;
  real_T Switch1;

  // Outputs for Atomic SubSystem: '<S11>/Subscribe2'
  // Start for MATLABSystem: '<S12>/SourceBlock' incorporates:
  //   MATLABSystem: '<S12>/SourceBlock'

  // MATLAB Function 'cyc_pursuit2': '<S4>:1'
  // '<S4>:1:4' y1 = ((1-0.2)*u1+(u3*0.2)-(0.75*0.2));
  // '<S4>:1:5' y2 = ((1-0.2)*u2+(0.2*u4)+(1.2990*0.2));
  // '<S4>:1:6' y3=u1;
  // '<S4>:1:7' y4=u2;
  //        y1 = ((1-0.2)*u1+(u3*0.2)+(1.5451*0.2));
  //          y2 = ((1-0.2)*u2+(0.2*u4)+(4.7553*0.2));
  //          y3 = ((1-0.2)*u3+(u5*0.2)-(4.0451*0.2));
  //          y4 = ((1-0.2)*u4+(u6*0.2)+(2.9389*0.2));
  //          y5 = ((1-0.2)*u5+(u7*0.2)-(4.0451*0.2));
  //          y6 = ((1-0.2)*u6+(u8*0.2)-(2.9389*0.2));
  //          y7 = ((1-0.2)*u7+(u9*0.2)+(1.5451*0.2));
  //          y8 = ((1-0.2)*u8+(u10*0.2)-(4.7553*0.2));
  //          y9 = ((1-0.2)*u9+(u1*0.2)+(5*0.2));
  //          y10 = ((1-0.2)*u10+(u2*0.2)+(0*0.2));
  varargout_1 = Sub_robot_cam1a_11.getLatestMessage(&robot_cam1a_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S1>/Command Velocity Publisher' incorporates:
  //   EnablePort: '<S5>/Enable'

  // Outputs for Enabled SubSystem: '<S2>/Proportional Controller' incorporates:
  //   EnablePort: '<S9>/Enable'

  if (varargout_1) {
    // Sum: '<S9>/Sum1' incorporates:
    //   MATLAB Function: '<Root>/cyc_pursuit2'

    rtb_Sum1 = ((0.8 * robot_cam1a_B.UDPReceive_o1[1] + 0.2 *
                 robot_cam1a_B.UDPReceive_o1[4]) + 0.2598) -
      robot_cam1a_B.UDPReceive_o1[1];

    // Sum: '<S9>/Sum' incorporates:
    //   MATLAB Function: '<Root>/cyc_pursuit2'

    rtb_Sum = ((0.8 * robot_cam1a_B.UDPReceive_o1[0] +
                robot_cam1a_B.UDPReceive_o1[3] * 0.2) - 0.15000000000000002) -
      robot_cam1a_B.UDPReceive_o1[0];

    // Fcn: '<S9>/Distance1'
    rtb_Sum3 = rt_powd_snf(rtb_Sum, 2.0) + rt_powd_snf(rtb_Sum1, 2.0);
    if (rtb_Sum3 < 0.0) {
      rtb_Sum3 = -sqrt(-rtb_Sum3);
    } else {
      rtb_Sum3 = sqrt(rtb_Sum3);
    }

    // End of Fcn: '<S9>/Distance1'

    // Switch: '<S9>/Switch1' incorporates:
    //   Constant: '<S10>/Constant'
    //   Constant: '<S9>/Stop1'
    //   Fcn: '<S9>/Bound [-pi,pi]'
    //   RelationalOperator: '<S10>/Compare'
    //   Switch: '<S9>/Switch2'

    if (rtb_Sum3 <= robot_cam1a_P.speedThreshold2_const) {
      Switch1 = robot_cam1a_P.Stop1_Value;
      rtb_Sum1 = robot_cam1a_P.Stop1_Value;
    } else {
      // Sum: '<S9>/Sum3' incorporates:
      //   Trigonometry: '<S9>/Desired Yaw'

      rtb_Sum3 = rt_atan2d_snf(rtb_Sum1, rtb_Sum) - robot_cam1a_B.UDPReceive_o1
        [2];
      Switch1 = rt_atan2d_snf(sin(rtb_Sum3), cos(rtb_Sum3));

      // Fcn: '<S9>/Distance3' incorporates:
      //   Fcn: '<S9>/Bound [-pi,pi]'

      rtb_Sum1 *= 5.0;

      // Fcn: '<S9>/Distance2'
      rtb_Sum *= 5.0;

      // Fcn: '<S9>/Distance'
      rtb_Sum3 = rt_powd_snf(rtb_Sum, 2.0) + rt_powd_snf(rtb_Sum1, 2.0);
      if (rtb_Sum3 < 0.0) {
        rtb_Sum1 = -sqrt(-rtb_Sum3);
      } else {
        rtb_Sum1 = sqrt(rtb_Sum3);
      }

      // End of Fcn: '<S9>/Distance'
    }

    // End of Switch: '<S9>/Switch1'

    // BusAssignment: '<S5>/Bus Assignment1' incorporates:
    //   Constant: '<S7>/Constant'
    //   Gain: '<S6>/Slider Gain'

    robot_cam1a_B.BusAssignment1 = robot_cam1a_P.Constant_Value_p;
    robot_cam1a_B.BusAssignment1.Linear.X =
      robot_cam1a_P.LinearVelocitySlider_gain * rtb_Sum1;
    robot_cam1a_B.BusAssignment1.Angular.Z = Switch1;

    // Outputs for Atomic SubSystem: '<S5>/Publish2'
    // Start for MATLABSystem: '<S8>/SinkBlock' incorporates:
    //   MATLABSystem: '<S8>/SinkBlock'

    Pub_robot_cam1a_75.publish(&robot_cam1a_B.BusAssignment1);

    // End of Outputs for SubSystem: '<S5>/Publish2'
  }

  // End of Start for MATLABSystem: '<S12>/SourceBlock'
  // End of Outputs for SubSystem: '<S2>/Proportional Controller'
  // End of Outputs for SubSystem: '<S1>/Command Velocity Publisher'
  // End of Outputs for SubSystem: '<S11>/Subscribe2'
}

// Model initialize function
void robot_0ModelClass::initialize()
{
  // Registration code

  // initialize non-finites
  rt_InitInfAndNaN(sizeof(real_T));

  // initialize error status
  rtmSetErrorStatus((&robot_cam1a_M), (NULL));

  // states (dwork)
  (void) memset((void *)&robot_cam1a_DW, 0,
                sizeof(DW_robot_cam1a_T));

  {
    static const char_T tmp[16] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0', '/',
      'c', 'm', 'd', '_', 'v', 'e', 'l' };

    static const char_T tmp_0[13] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0',
      '/', 'p', 'o', 's', 'e' };

    char_T tmp_1[17];
    char_T tmp_2[14];
    int32_T i;

    // Start for Atomic SubSystem: '<S11>/Subscribe2'
    // Start for MATLABSystem: '<S12>/SourceBlock'
    robot_cam1a_DW.obj_o.isInitialized = 0;
    robot_cam1a_DW.obj_o.isInitialized = 1;
    for (i = 0; i < 13; i++) {
      tmp_2[i] = tmp_0[i];
    }

    tmp_2[13] = '\x00';
    Sub_robot_cam1a_11.createSubscriber(tmp_2, robot_cam1a_MessageQueueLen_k);

    // End of Start for MATLABSystem: '<S12>/SourceBlock'
    // End of Start for SubSystem: '<S11>/Subscribe2'

    // Start for Enabled SubSystem: '<S1>/Command Velocity Publisher'
    // Start for Atomic SubSystem: '<S5>/Publish2'
    // Start for MATLABSystem: '<S8>/SinkBlock'
    robot_cam1a_DW.obj.isInitialized = 0;
    robot_cam1a_DW.obj.isInitialized = 1;
    for (i = 0; i < 16; i++) {
      tmp_1[i] = tmp[i];
    }

    tmp_1[16] = '\x00';
    Pub_robot_cam1a_75.createPublisher(tmp_1, robot_cam1a_MessageQueueLen);

    // End of Start for MATLABSystem: '<S8>/SinkBlock'
    // End of Start for SubSystem: '<S5>/Publish2'
    // End of Start for SubSystem: '<S1>/Command Velocity Publisher'
  }
}

// Model terminate function
void robot_0ModelClass::terminate()
{
  // Terminate for Atomic SubSystem: '<S11>/Subscribe2'
  // Start for MATLABSystem: '<S12>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S12>/SourceBlock'

  if (robot_cam1a_DW.obj_o.isInitialized == 1) {
    robot_cam1a_DW.obj_o.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S12>/SourceBlock'
  // End of Terminate for SubSystem: '<S11>/Subscribe2'

  // Terminate for Enabled SubSystem: '<S1>/Command Velocity Publisher'
  // Terminate for Atomic SubSystem: '<S5>/Publish2'
  // Start for MATLABSystem: '<S8>/SinkBlock' incorporates:
  //   Terminate for MATLABSystem: '<S8>/SinkBlock'

  if (robot_cam1a_DW.obj.isInitialized == 1) {
    robot_cam1a_DW.obj.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S8>/SinkBlock'
  // End of Terminate for SubSystem: '<S5>/Publish2'
  // End of Terminate for SubSystem: '<S1>/Command Velocity Publisher'
}

// Constructor
robot_0ModelClass::robot_0ModelClass()
{
  static const P_robot_cam1a_T robot_cam1a_P_temp = {
    0.009,                             // Mask Parameter: speedThreshold2_const
                                       //  Referenced by: '<S10>/Constant'

    0.1,                               // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S6>/Slider Gain'


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
                                       //  Referenced by: '<S13>/Out1'


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
                                       //  Referenced by: '<S12>/Constant'


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
                                       //  Referenced by: '<S7>/Constant'

    0.0,                               // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S9>/Linear Velocity (v)'

    0.0,                               // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S9>/Angular Velocity (w)'

    0.0                                // Expression: 0
                                       //  Referenced by: '<S9>/Stop1'

  };                                   // Modifiable parameters

  // Initialize tunable parameters
  robot_cam1a_P = robot_cam1a_P_temp;
}

// Destructor
robot_0ModelClass::~robot_0ModelClass()
{
  // Currently there is no destructor body generated.
}

// Real-Time Model get method
RT_MODEL_robot_cam1a_T * robot_0ModelClass::getRTM()
{
  return (&robot_cam1a_M);
}

//
// File trailer for generated code.
//
// [EOF]
//
