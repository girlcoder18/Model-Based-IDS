//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_0.h
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
#ifndef RTW_HEADER_robot_0_h_
#define RTW_HEADER_robot_0_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef robot_0_COMMON_INCLUDES_
# define robot_0_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "slros_initialize.h"
#endif                                 // robot_0_COMMON_INCLUDES_

#include "robot_0_types.h"
#include "rt_defines.h"
#include "rt_nonfinite.h"
#include "rtGetInf.h"

// Macros for accessing real-time model data structure
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

// Block signals for system '<S5>/Conversion1'
typedef struct {
  real_T yaw;                          // '<S5>/Conversion1'
} B_Conversion1_robot_0_T;

// Block signals (auto storage)
typedef struct {
  SL_Bus_robot_0_nav_msgs_Odometry In1;// '<S18>/In1'
  SL_Bus_robot_0_nav_msgs_Odometry In1_c;// '<S17>/In1'
  SL_Bus_robot_0_nav_msgs_Odometry varargout_2;
  SL_Bus_robot_0_geometry_msgs_Twist BusAssignment1;// '<S6>/Bus Assignment1'
  real_T Sum1;                         // '<S10>/Sum1'
  real_T Sum;                          // '<S10>/Sum'
  real_T Sum3;                         // '<S10>/Sum3'
  real_T Switch1;
  B_Conversion1_robot_0_T sf_Conversion2;// '<S5>/Conversion2'
  B_Conversion1_robot_0_T sf_Conversion1;// '<S5>/Conversion1'
} B_robot_0_T;

// Block states (auto storage) for system '<Root>'
typedef struct {
  void *SourceBlock_PWORK;             // '<S16>/SourceBlock'
  void *SourceBlock_PWORK_c;           // '<S15>/SourceBlock'
  void *SinkBlock_PWORK;               // '<S9>/SinkBlock'
  robotics_slros_internal_block_T obj; // '<S9>/SinkBlock'
  robotics_slros_internal_blo_d_T obj_p;// '<S16>/SourceBlock'
  robotics_slros_internal_blo_d_T obj_m;// '<S15>/SourceBlock'
} DW_robot_0_T;

// Parameters (auto storage)
struct P_robot_0_T_ {
  real_T speedThreshold2_const;        // Mask Parameter: speedThreshold2_const
                                       //  Referenced by: '<S11>/Constant'

  real_T LinearVelocitySlider_gain;    // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S7>/Slider Gain'

  SL_Bus_robot_0_nav_msgs_Odometry Out1_Y0;// Computed Parameter: Out1_Y0
                                           //  Referenced by: '<S17>/Out1'

  SL_Bus_robot_0_nav_msgs_Odometry Constant_Value;// Computed Parameter: Constant_Value
                                                  //  Referenced by: '<S15>/Constant'

  SL_Bus_robot_0_nav_msgs_Odometry Out1_Y0_k;// Computed Parameter: Out1_Y0_k
                                             //  Referenced by: '<S18>/Out1'

  SL_Bus_robot_0_nav_msgs_Odometry Constant_Value_o;// Computed Parameter: Constant_Value_o
                                                    //  Referenced by: '<S16>/Constant'

  SL_Bus_robot_0_geometry_msgs_Twist Constant_Value_e;// Computed Parameter: Constant_Value_e
                                                      //  Referenced by: '<S8>/Constant'

  real_T LinearVelocityv_Y0;           // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S10>/Linear Velocity (v)'

  real_T AngularVelocityw_Y0;          // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S10>/Angular Velocity (w)'

  real_T Stop1_Value;                  // Expression: 0
                                       //  Referenced by: '<S10>/Stop1'

};

// Real-time Model Data Structure
struct tag_RTM_robot_0_T {
  const char_T *errorStatus;
};

// Block parameters (auto storage)
#ifdef __cplusplus

extern "C" {

#endif

  extern P_robot_0_T robot_0_P;

#ifdef __cplusplus

}
#endif

// Block signals (auto storage)
extern B_robot_0_T robot_0_B;

// Block states (auto storage)
extern DW_robot_0_T robot_0_DW;

#ifdef __cplusplus

extern "C" {

#endif

#ifdef __cplusplus

}
#endif

#ifdef __cplusplus

extern "C" {

#endif

  // Model entry point functions
  extern void robot_0_initialize(void);
  extern void robot_0_step(void);
  extern void robot_0_terminate(void);

#ifdef __cplusplus

}
#endif

// Real-time Model object
#ifdef __cplusplus

extern "C" {

#endif

  extern RT_MODEL_robot_0_T *const robot_0_M;

#ifdef __cplusplus

}
#endif

//-
//  The generated code includes comments that allow you to trace directly
//  back to the appropriate location in the model.  The basic format
//  is <system>/block_name, where system is the system number (uniquely
//  assigned by Simulink) and block_name is the name of the block.
//
//  Use the MATLAB hilite_system command to trace the generated code back
//  to the model.  For example,
//
//  hilite_system('<S3>')    - opens system 3
//  hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
//
//  Here is the system hierarchy for this model
//
//  '<Root>' : 'robot_0'
//  '<S1>'   : 'robot_0/robot_0'
//  '<S2>'   : 'robot_0/robot_0/Command robot'
//  '<S3>'   : 'robot_0/robot_0/Compute robot velocity'
//  '<S4>'   : 'robot_0/robot_0/Switch Case Action Subsystem'
//  '<S5>'   : 'robot_0/robot_0/robot_position'
//  '<S6>'   : 'robot_0/robot_0/Command robot/Command Velocity Publisher'
//  '<S7>'   : 'robot_0/robot_0/Command robot/Linear Velocity (Slider)'
//  '<S8>'   : 'robot_0/robot_0/Command robot/Command Velocity Publisher/Blank Message'
//  '<S9>'   : 'robot_0/robot_0/Command robot/Command Velocity Publisher/Publish2'
//  '<S10>'  : 'robot_0/robot_0/Compute robot velocity/Proportional Controller'
//  '<S11>'  : 'robot_0/robot_0/Compute robot velocity/Proportional Controller/speed Threshold2'
//  '<S12>'  : 'robot_0/robot_0/Switch Case Action Subsystem/cyc_pursuit2'
//  '<S13>'  : 'robot_0/robot_0/robot_position/Conversion1'
//  '<S14>'  : 'robot_0/robot_0/robot_position/Conversion2'
//  '<S15>'  : 'robot_0/robot_0/robot_position/robot1_position'
//  '<S16>'  : 'robot_0/robot_0/robot_position/robot2_position'
//  '<S17>'  : 'robot_0/robot_0/robot_position/robot1_position/Enabled Subsystem'
//  '<S18>'  : 'robot_0/robot_0/robot_position/robot2_position/Enabled Subsystem'

#endif                                 // RTW_HEADER_robot_0_h_

//
// File trailer for generated code.
//
// [EOF]
//
