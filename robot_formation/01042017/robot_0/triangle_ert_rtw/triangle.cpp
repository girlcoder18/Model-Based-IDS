//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: triangle.cpp
//
// Code generated for Simulink model 'triangle'.
//
// Model version                  : 1.228
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Wed Jan  4 18:22:43 2017
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include "triangle.h"
#include "triangle_private.h"
#define triangle_MessageQueueLen       (105)
#define triangle_MessageQueueLen_o     (1)

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

//
// Output and update for atomic system:
//    '<S3>/Conversion1'
//    '<S3>/Conversion2'
//
void triangle_Conversion1(real_T rtu_x, real_T rtu_y, real_T rtu_z, real_T rtu_w,
  B_Conversion1_triangle_T *localB)
{
  real_T b_y;
  real_T q_idx_0;
  real_T q_idx_1;
  real_T q_idx_2;

  // MATLAB Function 'camera/Conversion1': '<S11>:1'
  //  Convert the quaternion to a yaw angle (zyx euler angle)
  // '<S11>:1:5'
  b_y = 1.0 / sqrt(((rtu_w * rtu_w + rtu_x * rtu_x) + rtu_y * rtu_y) + rtu_z *
                   rtu_z);
  q_idx_0 = rtu_w * b_y;
  q_idx_1 = rtu_x * b_y;
  q_idx_2 = rtu_y * b_y;
  b_y *= rtu_z;

  // '<S11>:1:6'
  localB->yaw = rt_atan2d_snf((q_idx_1 * q_idx_2 + q_idx_0 * b_y) * 2.0,
    ((q_idx_0 * q_idx_0 + q_idx_1 * q_idx_1) - q_idx_2 * q_idx_2) - b_y * b_y);
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
void Example3ModelClass::step()
{
  boolean_T varargout_1;
  boolean_T rtb_Compare;

  // Outputs for Atomic SubSystem: '<S3>/Subscribe2'
  // Start for MATLABSystem: '<S14>/SourceBlock' incorporates:
  //   Inport: '<S16>/In1'
  //   MATLABSystem: '<S14>/SourceBlock'

  rtb_Compare = Sub_triangle_949.getLatestMessage(&triangle_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S14>/Enabled Subsystem' incorporates:
  //   EnablePort: '<S16>/Enable'

  if (rtb_Compare) {
    triangle_B.In1 = triangle_B.varargout_2;
  }

  // End of Outputs for SubSystem: '<S14>/Enabled Subsystem'
  // End of Outputs for SubSystem: '<S3>/Subscribe2'

  // Outputs for Atomic SubSystem: '<S3>/Subscribe1'
  // Start for MATLABSystem: '<S13>/SourceBlock' incorporates:
  //   Inport: '<S15>/In1'
  //   MATLABSystem: '<S13>/SourceBlock'

  varargout_1 = Sub_triangle_948.getLatestMessage(&triangle_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S13>/Enabled Subsystem' incorporates:
  //   EnablePort: '<S15>/Enable'

  if (varargout_1) {
    triangle_B.In1_m = triangle_B.varargout_2;
  }

  // End of Start for MATLABSystem: '<S13>/SourceBlock'
  // End of Outputs for SubSystem: '<S13>/Enabled Subsystem'
  // End of Outputs for SubSystem: '<S3>/Subscribe1'

  // MATLAB Function: '<S3>/Conversion2'
  // MATLAB Function 'cyc_pursuit2': '<S4>:1'
  // '<S4>:1:4'
  // '<S4>:1:5'
  // '<S4>:1:6'
  // '<S4>:1:7'
  //          y1 = ((1-0.2)*u1+(u3*0.2)+(1.5451*0.2));
  //          y2 = ((1-0.2)*u2+(0.2*u4)+(4.7553*0.2));
  //          y3 = ((1-0.2)*u3+(u5*0.2)-(4.0451*0.2));
  //          y4 = ((1-0.2)*u4+(u6*0.2)+(2.9389*0.2));
  //          y5 = ((1-0.2)*u5+(u7*0.2)-(4.0451*0.2));
  //          y6 = ((1-0.2)*u6+(u8*0.2)-(2.9389*0.2));
  //          y7 = ((1-0.2)*u7+(u9*0.2)+(1.5451*0.2));
  //          y8 = ((1-0.2)*u8+(u10*0.2)-(4.7553*0.2));
  //          y9 = ((1-0.2)*u9+(u1*0.2)+(5*0.2));
  //          y10 = ((1-0.2)*u10+(u2*0.2)+(0*0.2));
  triangle_Conversion1(triangle_B.In1.Pose.Orientation.X,
                       triangle_B.In1.Pose.Orientation.Y,
                       triangle_B.In1.Pose.Orientation.Z,
                       triangle_B.In1.Pose.Orientation.W,
                       &triangle_B.sf_Conversion2);

  // Outputs for Enabled SubSystem: '<S1>/Command Velocity Publisher' incorporates:
  //   EnablePort: '<S5>/Enable'

  // Outputs for Enabled SubSystem: '<S2>/Proportional Controller1' incorporates:
  //   EnablePort: '<S8>/Enable'

  // Outputs for Atomic SubSystem: '<S3>/Subscribe2'
  // Start for MATLABSystem: '<S14>/SourceBlock' incorporates:
  //   MATLABSystem: '<S14>/SourceBlock'

  if (rtb_Compare) {
    // Sum: '<S8>/Sum1' incorporates:
    //   MATLAB Function: '<Root>/cyc_pursuit2'
    //   SignalConversion: '<S3>/SigConversion_InsertedFor_Bus Selector1_at_outport_1'
    //   SignalConversion: '<S3>/SigConversion_InsertedFor_Bus Selector2_at_outport_1'

    triangle_B.Sum1 = ((0.8 * triangle_B.In1.Pose.Position.Y + 0.2 *
                        triangle_B.In1_m.Pose.Position.Y) + 0.34642) -
      triangle_B.In1.Pose.Position.Y;

    // Sum: '<S8>/Sum' incorporates:
    //   MATLAB Function: '<Root>/cyc_pursuit2'
    //   SignalConversion: '<S3>/SigConversion_InsertedFor_Bus Selector1_at_outport_0'
    //   SignalConversion: '<S3>/SigConversion_InsertedFor_Bus Selector2_at_outport_0'

    triangle_B.Sum = ((0.8 * triangle_B.In1.Pose.Position.X +
                       triangle_B.In1_m.Pose.Position.X * 0.2) - 0.2) -
      triangle_B.In1.Pose.Position.X;

    // Fcn: '<S8>/Distance'
    triangle_B.Distance1 = rt_powd_snf(triangle_B.Sum, 2.0) + rt_powd_snf
      (triangle_B.Sum1, 2.0);
    if (triangle_B.Distance1 < 0.0) {
      triangle_B.rtb_Distance1_m = -sqrt(-triangle_B.Distance1);
    } else {
      triangle_B.rtb_Distance1_m = sqrt(triangle_B.Distance1);
    }

    // End of Fcn: '<S8>/Distance'

    // Fcn: '<S8>/Distance1' incorporates:
    //   Fcn: '<S8>/Distance2'
    //   Fcn: '<S8>/Distance3'

    triangle_B.Distance1 = rt_powd_snf(triangle_B.Sum * 5.0, 2.0) + rt_powd_snf
      (triangle_B.Sum1 * 5.0, 2.0);

    // Switch: '<S8>/Switch' incorporates:
    //   Constant: '<S8>/Stop'
    //   Constant: '<S9>/Constant'
    //   Fcn: '<S8>/Bound [-pi,pi]'
    //   Fcn: '<S8>/Distance1'
    //   Gain: '<S10>/Slider Gain'
    //   RelationalOperator: '<S9>/Compare'
    //   Switch: '<S8>/Switch1'

    if (triangle_B.rtb_Distance1_m <= triangle_P.DistanceThreshold_const) {
      triangle_B.Distance1 = triangle_P.Stop_Value;
      triangle_B.Sum1 = triangle_P.Stop_Value;
    } else {
      if (triangle_B.Distance1 < 0.0) {
        // Fcn: '<S8>/Distance1'
        triangle_B.Distance1 = -sqrt(-triangle_B.Distance1);
      } else {
        // Fcn: '<S8>/Distance1'
        triangle_B.Distance1 = sqrt(triangle_B.Distance1);
      }

      triangle_B.Distance1 *= triangle_P.LinearVelocitySlider_gain;

      // Sum: '<S8>/Sum3' incorporates:
      //   Gain: '<S10>/Slider Gain'
      //   Trigonometry: '<S8>/Desired Yaw'

      triangle_B.Sum1 = rt_atan2d_snf(triangle_B.Sum1, triangle_B.Sum) -
        triangle_B.sf_Conversion2.yaw;
      triangle_B.Sum1 = rt_atan2d_snf(sin(triangle_B.Sum1), cos(triangle_B.Sum1));
    }

    // End of Switch: '<S8>/Switch'

    // BusAssignment: '<S5>/Bus Assignment1' incorporates:
    //   Constant: '<S6>/Constant'

    triangle_B.BusAssignment1 = triangle_P.Constant_Value_d0;
    triangle_B.BusAssignment1.Linear.X = triangle_B.Distance1;
    triangle_B.BusAssignment1.Angular.Z = triangle_B.Sum1;

    // Outputs for Atomic SubSystem: '<S5>/Publish2'
    // Start for MATLABSystem: '<S7>/SinkBlock' incorporates:
    //   MATLABSystem: '<S7>/SinkBlock'

    Pub_triangle_905.publish(&triangle_B.BusAssignment1);

    // End of Outputs for SubSystem: '<S5>/Publish2'
  }

  // End of Outputs for SubSystem: '<S3>/Subscribe2'
  // End of Outputs for SubSystem: '<S2>/Proportional Controller1'
  // End of Outputs for SubSystem: '<S1>/Command Velocity Publisher'

  // MATLAB Function: '<S3>/Conversion1'
  triangle_Conversion1(triangle_B.In1_m.Pose.Orientation.X,
                       triangle_B.In1_m.Pose.Orientation.Y,
                       triangle_B.In1_m.Pose.Orientation.Z,
                       triangle_B.In1_m.Pose.Orientation.W,
                       &triangle_B.sf_Conversion1);
}

// Model initialize function
void Example3ModelClass::initialize()
{
  // Registration code

  // initialize non-finites
  rt_InitInfAndNaN(sizeof(real_T));

  // initialize error status
  rtmSetErrorStatus((&triangle_M), (NULL));

  // block I/O
  (void) memset(((void *) &triangle_B), 0,
                sizeof(B_triangle_T));

  // states (dwork)
  (void) memset((void *)&triangle_DW, 0,
                sizeof(DW_triangle_T));

  {
    static const char_T tmp[16] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0', '/',
      'c', 'm', 'd', '_', 'v', 'e', 'l' };

    static const char_T tmp_0[11] = { '/', 'b', 'o', 't', '_', '1', '/', 'p',
      'o', 's', 'e' };

    static const char_T tmp_1[11] = { '/', 'b', 'o', 't', '_', '0', '/', 'p',
      'o', 's', 'e' };

    char_T tmp_2[17];
    char_T tmp_3[12];
    int32_T i;

    // Start for Atomic SubSystem: '<S3>/Subscribe2'
    // Start for MATLABSystem: '<S14>/SourceBlock'
    triangle_DW.obj_p.isInitialized = 0;
    triangle_DW.obj_p.isInitialized = 1;
    for (i = 0; i < 11; i++) {
      tmp_3[i] = tmp_1[i];
    }

    tmp_3[11] = '\x00';
    Sub_triangle_949.createSubscriber(tmp_3, triangle_MessageQueueLen_o);

    // End of Start for MATLABSystem: '<S14>/SourceBlock'
    // End of Start for SubSystem: '<S3>/Subscribe2'

    // Start for Atomic SubSystem: '<S3>/Subscribe1'
    // Start for MATLABSystem: '<S13>/SourceBlock'
    triangle_DW.obj_l.isInitialized = 0;
    triangle_DW.obj_l.isInitialized = 1;
    for (i = 0; i < 11; i++) {
      tmp_3[i] = tmp_0[i];
    }

    tmp_3[11] = '\x00';
    Sub_triangle_948.createSubscriber(tmp_3, triangle_MessageQueueLen_o);

    // End of Start for MATLABSystem: '<S13>/SourceBlock'
    // End of Start for SubSystem: '<S3>/Subscribe1'

    // Start for Enabled SubSystem: '<S1>/Command Velocity Publisher'
    // Start for Atomic SubSystem: '<S5>/Publish2'
    // Start for MATLABSystem: '<S7>/SinkBlock'
    triangle_DW.obj.isInitialized = 0;
    triangle_DW.obj.isInitialized = 1;
    for (i = 0; i < 16; i++) {
      tmp_2[i] = tmp[i];
    }

    tmp_2[16] = '\x00';
    Pub_triangle_905.createPublisher(tmp_2, triangle_MessageQueueLen);

    // End of Start for MATLABSystem: '<S7>/SinkBlock'
    // End of Start for SubSystem: '<S5>/Publish2'
    // End of Start for SubSystem: '<S1>/Command Velocity Publisher'

    // SystemInitialize for Atomic SubSystem: '<S3>/Subscribe2'
    // SystemInitialize for Enabled SubSystem: '<S14>/Enabled Subsystem'
    // SystemInitialize for Outport: '<S16>/Out1'
    triangle_B.In1 = triangle_P.Out1_Y0_c;

    // End of SystemInitialize for SubSystem: '<S14>/Enabled Subsystem'
    // End of SystemInitialize for SubSystem: '<S3>/Subscribe2'

    // SystemInitialize for Atomic SubSystem: '<S3>/Subscribe1'
    // SystemInitialize for Enabled SubSystem: '<S13>/Enabled Subsystem'
    // SystemInitialize for Outport: '<S15>/Out1'
    triangle_B.In1_m = triangle_P.Out1_Y0;

    // End of SystemInitialize for SubSystem: '<S13>/Enabled Subsystem'
    // End of SystemInitialize for SubSystem: '<S3>/Subscribe1'
  }
}

// Model terminate function
void Example3ModelClass::terminate()
{
  // Terminate for Atomic SubSystem: '<S3>/Subscribe2'
  // Start for MATLABSystem: '<S14>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S14>/SourceBlock'

  if (triangle_DW.obj_p.isInitialized == 1) {
    triangle_DW.obj_p.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S14>/SourceBlock'
  // End of Terminate for SubSystem: '<S3>/Subscribe2'

  // Terminate for Atomic SubSystem: '<S3>/Subscribe1'
  // Start for MATLABSystem: '<S13>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S13>/SourceBlock'

  if (triangle_DW.obj_l.isInitialized == 1) {
    triangle_DW.obj_l.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S13>/SourceBlock'
  // End of Terminate for SubSystem: '<S3>/Subscribe1'

  // Terminate for Enabled SubSystem: '<S1>/Command Velocity Publisher'
  // Terminate for Atomic SubSystem: '<S5>/Publish2'
  // Start for MATLABSystem: '<S7>/SinkBlock' incorporates:
  //   Terminate for MATLABSystem: '<S7>/SinkBlock'

  if (triangle_DW.obj.isInitialized == 1) {
    triangle_DW.obj.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S7>/SinkBlock'
  // End of Terminate for SubSystem: '<S5>/Publish2'
  // End of Terminate for SubSystem: '<S1>/Command Velocity Publisher'
}

// Constructor
Example3ModelClass::Example3ModelClass()
{
  static const P_triangle_T triangle_P_temp = {
    0.02,                              // Mask Parameter: DistanceThreshold_const
                                       //  Referenced by: '<S9>/Constant'

    0.1,                               // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S10>/Slider Gain'


    {
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
          0.0,                         // X
          0.0,                         // Y
          0.0                          // Z
        },                             // Position

        {
          0.0,                         // X
          0.0,                         // Y
          0.0,                         // Z
          0.0                          // W
        }                              // Orientation
      }                                // Pose
    },                                 // Computed Parameter: Out1_Y0
                                       //  Referenced by: '<S15>/Out1'


    {
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
          0.0,                         // X
          0.0,                         // Y
          0.0                          // Z
        },                             // Position

        {
          0.0,                         // X
          0.0,                         // Y
          0.0,                         // Z
          0.0                          // W
        }                              // Orientation
      }                                // Pose
    },                                 // Computed Parameter: Constant_Value
                                       //  Referenced by: '<S13>/Constant'


    {
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
          0.0,                         // X
          0.0,                         // Y
          0.0                          // Z
        },                             // Position

        {
          0.0,                         // X
          0.0,                         // Y
          0.0,                         // Z
          0.0                          // W
        }                              // Orientation
      }                                // Pose
    },                                 // Computed Parameter: Out1_Y0_c
                                       //  Referenced by: '<S16>/Out1'


    {
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
          0.0,                         // X
          0.0,                         // Y
          0.0                          // Z
        },                             // Position

        {
          0.0,                         // X
          0.0,                         // Y
          0.0,                         // Z
          0.0                          // W
        }                              // Orientation
      }                                // Pose
    },                                 // Computed Parameter: Constant_Value_d
                                       //  Referenced by: '<S14>/Constant'


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
    },                                 // Computed Parameter: Constant_Value_d0
                                       //  Referenced by: '<S6>/Constant'

    0.0,                               // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S8>/Linear Velocity (v)'

    0.0,                               // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S8>/Angular Velocity (w)'

    0.0                                // Expression: 0
                                       //  Referenced by: '<S8>/Stop'

  };                                   // Modifiable parameters

  // Initialize tunable parameters
  triangle_P = triangle_P_temp;
}

// Destructor
Example3ModelClass::~Example3ModelClass()
{
  // Currently there is no destructor body generated.
}

// Real-Time Model get method
RT_MODEL_triangle_T * Example3ModelClass::getRTM()
{
  return (&triangle_M);
}

//
// File trailer for generated code.
//
// [EOF]
//
