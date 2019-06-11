//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_0.cpp
//
// Code generated for Simulink model 'robot_0'.
//
// Model version                  : 1.23
// Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
// C/C++ source code generated on : Mon Jun 13 22:54:33 2016
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include "robot_0.h"
#include "robot_0_private.h"
#define robot_0_MessageQueueLen        (105)
#define robot_0_MessageQueueLen_d      (1)

// Block signals (auto storage)
B_robot_0_T robot_0_B;

// Block states (auto storage)
DW_robot_0_T robot_0_DW;

// Real-time model
RT_MODEL_robot_0_T robot_0_M_;
RT_MODEL_robot_0_T *const robot_0_M = &robot_0_M_;
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
//    '<S5>/Conversion1'
//    '<S5>/Conversion2'
//
void robot_0_Conversion1(real_T rtu_x, real_T rtu_y, real_T rtu_z, real_T rtu_w,
  B_Conversion1_robot_0_T *localB)
{
  real_T b_y;
  real_T q_idx_0;
  real_T q_idx_1;
  real_T q_idx_2;

  // MATLAB Function 'robot_0/robot_position/Conversion1': '<S13>:1'
  //  Convert the quaternion to a yaw angle (zyx euler angle)
  // '<S13>:1:5'
  b_y = 1.0 / sqrt(((rtu_w * rtu_w + rtu_x * rtu_x) + rtu_y * rtu_y) + rtu_z *
                   rtu_z);
  q_idx_0 = rtu_w * b_y;
  q_idx_1 = rtu_x * b_y;
  q_idx_2 = rtu_y * b_y;
  b_y *= rtu_z;

  // '<S13>:1:6'
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
void robot_0_step(void)
{
  boolean_T varargout_1;
  boolean_T varargout_1_0;

  // Outputs for Atomic SubSystem: '<S5>/robot1_position'
  // Start for MATLABSystem: '<S15>/SourceBlock' incorporates:
  //   Inport: '<S17>/In1'
  //   MATLABSystem: '<S15>/SourceBlock'

  varargout_1 = Sub_robot_0_4.getLatestMessage(&robot_0_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S15>/Enabled Subsystem' incorporates:
  //   EnablePort: '<S17>/Enable'

  if (varargout_1) {
    robot_0_B.In1_c = robot_0_B.varargout_2;
  }

  // End of Outputs for SubSystem: '<S15>/Enabled Subsystem'
  // End of Outputs for SubSystem: '<S5>/robot1_position'

  // Outputs for Atomic SubSystem: '<S5>/robot2_position'
  // Start for MATLABSystem: '<S16>/SourceBlock' incorporates:
  //   Inport: '<S18>/In1'
  //   MATLABSystem: '<S16>/SourceBlock'

  varargout_1_0 = Sub_robot_0_25.getLatestMessage(&robot_0_B.varargout_2);

  // Outputs for Enabled SubSystem: '<S16>/Enabled Subsystem' incorporates:
  //   EnablePort: '<S18>/Enable'

  if (varargout_1_0) {
    robot_0_B.In1 = robot_0_B.varargout_2;
  }

  // End of Start for MATLABSystem: '<S16>/SourceBlock'
  // End of Outputs for SubSystem: '<S16>/Enabled Subsystem'
  // End of Outputs for SubSystem: '<S5>/robot2_position'

  // MATLAB Function: '<S5>/Conversion2'
  // MATLAB Function 'robot_0/Switch Case Action Subsystem/cyc_pursuit2': '<S12>:1' 
  // '<S12>:1:5'
  // '<S12>:1:6'
  robot_0_Conversion1(robot_0_B.In1_c.Pose.Pose.Orientation.X,
                      robot_0_B.In1_c.Pose.Pose.Orientation.Y,
                      robot_0_B.In1_c.Pose.Pose.Orientation.Z,
                      robot_0_B.In1_c.Pose.Pose.Orientation.W,
                      &robot_0_B.sf_Conversion2);

  // Outputs for Enabled SubSystem: '<S2>/Command Velocity Publisher' incorporates:
  //   EnablePort: '<S6>/Enable'

  // Outputs for Enabled SubSystem: '<S3>/Proportional Controller' incorporates:
  //   EnablePort: '<S10>/Enable'

  // Outputs for Atomic SubSystem: '<S5>/robot1_position'
  // Start for MATLABSystem: '<S15>/SourceBlock' incorporates:
  //   MATLABSystem: '<S15>/SourceBlock'

  if (varargout_1) {
    // Outputs for Atomic SubSystem: '<S1>/Switch Case Action Subsystem'
    // Sum: '<S10>/Sum1' incorporates:
    //   MATLAB Function: '<S4>/cyc_pursuit2'
    //   SignalConversion: '<S5>/SigConversion_InsertedFor_Bus Selector2_at_outport_1'

    robot_0_B.Sum1 = ((0.8 * robot_0_B.In1_c.Pose.Pose.Position.Y + 0.2 *
                       robot_0_B.In1.Pose.Pose.Position.Y) + 0.866024) -
      robot_0_B.In1_c.Pose.Pose.Position.Y;

    // Sum: '<S10>/Sum' incorporates:
    //   MATLAB Function: '<S4>/cyc_pursuit2'
    //   SignalConversion: '<S5>/SigConversion_InsertedFor_Bus Selector2_at_outport_0'

    robot_0_B.Sum = ((0.8 * robot_0_B.In1_c.Pose.Pose.Position.X +
                      robot_0_B.In1.Pose.Pose.Position.X * 0.2) - 0.5) -
      robot_0_B.In1_c.Pose.Pose.Position.X;

    // End of Outputs for SubSystem: '<S1>/Switch Case Action Subsystem'

    // Fcn: '<S10>/Distance1'
    robot_0_B.Sum3 = rt_powd_snf(robot_0_B.Sum, 2.0) + rt_powd_snf
      (robot_0_B.Sum1, 2.0);
    if (robot_0_B.Sum3 < 0.0) {
      robot_0_B.Sum3 = -sqrt(-robot_0_B.Sum3);
    } else {
      robot_0_B.Sum3 = sqrt(robot_0_B.Sum3);
    }

    // End of Fcn: '<S10>/Distance1'

    // Switch: '<S10>/Switch1' incorporates:
    //   Constant: '<S10>/Stop1'
    //   Constant: '<S11>/Constant'
    //   Fcn: '<S10>/Bound [-pi,pi]'
    //   RelationalOperator: '<S11>/Compare'
    //   Switch: '<S10>/Switch2'

    if (robot_0_B.Sum3 <= robot_0_P.speedThreshold2_const) {
      robot_0_B.Switch1 = robot_0_P.Stop1_Value;
      robot_0_B.Sum1 = robot_0_P.Stop1_Value;
    } else {
      // Sum: '<S10>/Sum3' incorporates:
      //   Trigonometry: '<S10>/Desired Yaw'

      robot_0_B.Sum3 = rt_atan2d_snf(robot_0_B.Sum1, robot_0_B.Sum) -
        robot_0_B.sf_Conversion2.yaw;
      robot_0_B.Switch1 = rt_atan2d_snf(sin(robot_0_B.Sum3), cos(robot_0_B.Sum3));

      // Fcn: '<S10>/Distance3' incorporates:
      //   Fcn: '<S10>/Bound [-pi,pi]'

      robot_0_B.Sum1 *= 5.0;

      // Fcn: '<S10>/Distance2'
      robot_0_B.Sum *= 5.0;

      // Fcn: '<S10>/Distance'
      robot_0_B.Sum3 = rt_powd_snf(robot_0_B.Sum, 2.0) + rt_powd_snf
        (robot_0_B.Sum1, 2.0);
      if (robot_0_B.Sum3 < 0.0) {
        robot_0_B.Sum1 = -sqrt(-robot_0_B.Sum3);
      } else {
        robot_0_B.Sum1 = sqrt(robot_0_B.Sum3);
      }

      // End of Fcn: '<S10>/Distance'
    }

    // End of Switch: '<S10>/Switch1'

    // BusAssignment: '<S6>/Bus Assignment1' incorporates:
    //   Constant: '<S8>/Constant'
    //   Gain: '<S7>/Slider Gain'

    robot_0_B.BusAssignment1 = robot_0_P.Constant_Value_e;
    robot_0_B.BusAssignment1.Linear.X = robot_0_P.LinearVelocitySlider_gain *
      robot_0_B.Sum1;
    robot_0_B.BusAssignment1.Angular.Z = robot_0_B.Switch1;

    // Outputs for Atomic SubSystem: '<S6>/Publish2'
    // Start for MATLABSystem: '<S9>/SinkBlock' incorporates:
    //   MATLABSystem: '<S9>/SinkBlock'

    Pub_robot_0_173.publish(&robot_0_B.BusAssignment1);

    // End of Outputs for SubSystem: '<S6>/Publish2'
  }

  // End of Outputs for SubSystem: '<S5>/robot1_position'
  // End of Outputs for SubSystem: '<S3>/Proportional Controller'
  // End of Outputs for SubSystem: '<S2>/Command Velocity Publisher'

  // MATLAB Function: '<S5>/Conversion1'
  robot_0_Conversion1(robot_0_B.In1.Pose.Pose.Orientation.X,
                      robot_0_B.In1.Pose.Pose.Orientation.Y,
                      robot_0_B.In1.Pose.Pose.Orientation.Z,
                      robot_0_B.In1.Pose.Pose.Orientation.W,
                      &robot_0_B.sf_Conversion1);
}

// Model initialize function
void robot_0_initialize(void)
{
  // Registration code

  // initialize non-finites
  rt_InitInfAndNaN(sizeof(real_T));

  // initialize error status
  rtmSetErrorStatus(robot_0_M, (NULL));

  // block I/O
  (void) memset(((void *) &robot_0_B), 0,
                sizeof(B_robot_0_T));

  // states (dwork)
  (void) memset((void *)&robot_0_DW, 0,
                sizeof(DW_robot_0_T));

  {
    static const char_T tmp[16] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0', '/',
      'c', 'm', 'd', '_', 'v', 'e', 'l' };

    static const char_T tmp_0[31] = { '/', 'r', 'o', 'b', 'o', 't', '_', '1',
      '/', 'b', 'a', 's', 'e', '_', 'p', 'o', 's', 'e', '_', 'g', 'r', 'o', 'u',
      'n', 'd', '_', 't', 'r', 'u', 't', 'h' };

    static const char_T tmp_1[31] = { '/', 'r', 'o', 'b', 'o', 't', '_', '0',
      '/', 'b', 'a', 's', 'e', '_', 'p', 'o', 's', 'e', '_', 'g', 'r', 'o', 'u',
      'n', 'd', '_', 't', 'r', 'u', 't', 'h' };

    char_T tmp_2[17];
    char_T tmp_3[32];
    int32_T i;

    // Start for Atomic SubSystem: '<S5>/robot1_position'
    // Start for MATLABSystem: '<S15>/SourceBlock'
    robot_0_DW.obj_m.isInitialized = 0;
    robot_0_DW.obj_m.isInitialized = 1;
    for (i = 0; i < 31; i++) {
      tmp_3[i] = tmp_1[i];
    }

    tmp_3[31] = '\x00';
    Sub_robot_0_4.createSubscriber(tmp_3, robot_0_MessageQueueLen_d);

    // End of Start for MATLABSystem: '<S15>/SourceBlock'
    // End of Start for SubSystem: '<S5>/robot1_position'

    // Start for Atomic SubSystem: '<S5>/robot2_position'
    // Start for MATLABSystem: '<S16>/SourceBlock'
    robot_0_DW.obj_p.isInitialized = 0;
    robot_0_DW.obj_p.isInitialized = 1;
    for (i = 0; i < 31; i++) {
      tmp_3[i] = tmp_0[i];
    }

    tmp_3[31] = '\x00';
    Sub_robot_0_25.createSubscriber(tmp_3, robot_0_MessageQueueLen_d);

    // End of Start for MATLABSystem: '<S16>/SourceBlock'
    // End of Start for SubSystem: '<S5>/robot2_position'

    // Start for Enabled SubSystem: '<S2>/Command Velocity Publisher'
    // Start for Atomic SubSystem: '<S6>/Publish2'
    // Start for MATLABSystem: '<S9>/SinkBlock'
    robot_0_DW.obj.isInitialized = 0;
    robot_0_DW.obj.isInitialized = 1;
    for (i = 0; i < 16; i++) {
      tmp_2[i] = tmp[i];
    }

    tmp_2[16] = '\x00';
    Pub_robot_0_173.createPublisher(tmp_2, robot_0_MessageQueueLen);

    // End of Start for MATLABSystem: '<S9>/SinkBlock'
    // End of Start for SubSystem: '<S6>/Publish2'
    // End of Start for SubSystem: '<S2>/Command Velocity Publisher'

    // SystemInitialize for Atomic SubSystem: '<S5>/robot1_position'
    // SystemInitialize for Enabled SubSystem: '<S15>/Enabled Subsystem'
    // SystemInitialize for Outport: '<S17>/Out1'
    robot_0_B.In1_c = robot_0_P.Out1_Y0;

    // End of SystemInitialize for SubSystem: '<S15>/Enabled Subsystem'
    // End of SystemInitialize for SubSystem: '<S5>/robot1_position'

    // SystemInitialize for Atomic SubSystem: '<S5>/robot2_position'
    // SystemInitialize for Enabled SubSystem: '<S16>/Enabled Subsystem'
    // SystemInitialize for Outport: '<S18>/Out1'
    robot_0_B.In1 = robot_0_P.Out1_Y0_k;

    // End of SystemInitialize for SubSystem: '<S16>/Enabled Subsystem'
    // End of SystemInitialize for SubSystem: '<S5>/robot2_position'
  }
}

// Model terminate function
void robot_0_terminate(void)
{
  // Terminate for Atomic SubSystem: '<S5>/robot1_position'
  // Start for MATLABSystem: '<S15>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S15>/SourceBlock'

  if (robot_0_DW.obj_m.isInitialized == 1) {
    robot_0_DW.obj_m.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S15>/SourceBlock'
  // End of Terminate for SubSystem: '<S5>/robot1_position'

  // Terminate for Atomic SubSystem: '<S5>/robot2_position'
  // Start for MATLABSystem: '<S16>/SourceBlock' incorporates:
  //   Terminate for MATLABSystem: '<S16>/SourceBlock'

  if (robot_0_DW.obj_p.isInitialized == 1) {
    robot_0_DW.obj_p.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S16>/SourceBlock'
  // End of Terminate for SubSystem: '<S5>/robot2_position'

  // Terminate for Enabled SubSystem: '<S2>/Command Velocity Publisher'
  // Terminate for Atomic SubSystem: '<S6>/Publish2'
  // Start for MATLABSystem: '<S9>/SinkBlock' incorporates:
  //   Terminate for MATLABSystem: '<S9>/SinkBlock'

  if (robot_0_DW.obj.isInitialized == 1) {
    robot_0_DW.obj.isInitialized = 2;
  }

  // End of Start for MATLABSystem: '<S9>/SinkBlock'
  // End of Terminate for SubSystem: '<S6>/Publish2'
  // End of Terminate for SubSystem: '<S2>/Command Velocity Publisher'
}

//
// File trailer for generated code.
//
// [EOF]
//
