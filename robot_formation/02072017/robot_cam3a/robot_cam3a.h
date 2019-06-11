//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_cam3a.h
//
// Code generated for Simulink model 'robot_cam3a'.
//
// Model version                  : 1.31
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Tue Feb  7 18:29:34 2017
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#ifndef RTW_HEADER_robot_cam3a_h_
#define RTW_HEADER_robot_cam3a_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef robot_cam3a_COMMON_INCLUDES_
# define robot_cam3a_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "slros_initialize.h"
#endif                                 // robot_cam3a_COMMON_INCLUDES_

#include "robot_cam3a_types.h"
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

// Block signals (auto storage)
typedef struct {
  SL_Bus_robot_cam3a_nav_msgs_Odometry varargout_2;
  real_T UDPReceive_o1[12];            // '<S11>/UDP Receive'
  SL_Bus_robot_cam3a_geometry_msgs_Twist BusAssignment1;// '<S5>/Bus Assignment1' 
} B_robot_cam3a_T;

// Block states (auto storage) for system '<Root>'
typedef struct {
  void *SourceBlock_PWORK;             // '<S12>/SourceBlock'
  void *SinkBlock_PWORK;               // '<S8>/SinkBlock'
  robotics_slros_internal_block_T obj; // '<S8>/SinkBlock'
  robotics_slros_internal_blo_e_T obj_c;// '<S12>/SourceBlock'
} DW_robot_cam3a_T;

// Parameters (auto storage)
struct P_robot_cam3a_T_ {
  real_T speedThreshold2_const;        // Mask Parameter: speedThreshold2_const
                                       //  Referenced by: '<S10>/Constant'

  real_T LinearVelocitySlider_gain;    // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S6>/Slider Gain'

  SL_Bus_robot_cam3a_nav_msgs_Odometry Out1_Y0;// Computed Parameter: Out1_Y0
                                               //  Referenced by: '<S13>/Out1'

  SL_Bus_robot_cam3a_nav_msgs_Odometry Constant_Value;// Computed Parameter: Constant_Value
                                                      //  Referenced by: '<S12>/Constant'

  SL_Bus_robot_cam3a_geometry_msgs_Twist Constant_Value_p;// Computed Parameter: Constant_Value_p
                                                          //  Referenced by: '<S7>/Constant'

  real_T LinearVelocityv_Y0;           // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S9>/Linear Velocity (v)'

  real_T AngularVelocityw_Y0;          // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S9>/Angular Velocity (w)'

  real_T Stop1_Value;                  // Expression: 0
                                       //  Referenced by: '<S9>/Stop1'

};

// Real-time Model Data Structure
struct tag_RTM_robot_cam3a_T {
  const char_T *errorStatus;
};

#ifdef __cplusplus

extern "C" {

#endif

#ifdef __cplusplus

}
#endif

// Class declaration for model robot_cam3a
class robot_0ModelClass {
  // public data and function members
 public:
  // model initialize function
  void initialize();

  // model step function
  void step();

  // model terminate function
  void terminate();

  // Constructor
  robot_0ModelClass();

  // Destructor
  ~robot_0ModelClass();

  // Real-Time Model get method
  RT_MODEL_robot_cam3a_T * getRTM();

  // private data and function members
 private:
  // Tunable parameters
  P_robot_cam3a_T robot_cam3a_P;

  // Block signals
  B_robot_cam3a_T robot_cam3a_B;

  // Block states
  DW_robot_cam3a_T robot_cam3a_DW;

  // Real-Time Model
  RT_MODEL_robot_cam3a_T robot_cam3a_M;
};

//-
//  These blocks were eliminated from the model due to optimizations:
//
//  Block '<S3>/Real-Imag to Complex' : Unused code path elimination
//  Block '<S3>/Real-Imag to Complex1' : Unused code path elimination
//  Block '<S3>/Scope' : Unused code path elimination
//  Block '<S3>/To Workspace' : Unused code path elimination
//  Block '<S3>/To Workspace1' : Unused code path elimination
//  Block '<S3>/To Workspace3' : Unused code path elimination
//  Block '<S3>/To Workspace4' : Unused code path elimination
//  Block '<S3>/To Workspace5' : Unused code path elimination
//  Block '<S3>/To Workspace6' : Unused code path elimination


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
//  '<Root>' : 'robot_cam3a'
//  '<S1>'   : 'robot_cam3a/Command robot'
//  '<S2>'   : 'robot_cam3a/Compute robot velocity'
//  '<S3>'   : 'robot_cam3a/camera'
//  '<S4>'   : 'robot_cam3a/cyc_pursuit2'
//  '<S5>'   : 'robot_cam3a/Command robot/Command Velocity Publisher'
//  '<S6>'   : 'robot_cam3a/Command robot/Linear Velocity (Slider)'
//  '<S7>'   : 'robot_cam3a/Command robot/Command Velocity Publisher/Blank Message'
//  '<S8>'   : 'robot_cam3a/Command robot/Command Velocity Publisher/Publish2'
//  '<S9>'   : 'robot_cam3a/Compute robot velocity/Proportional Controller'
//  '<S10>'  : 'robot_cam3a/Compute robot velocity/Proportional Controller/speed Threshold2'
//  '<S11>'  : 'robot_cam3a/camera/Recieve'
//  '<S12>'  : 'robot_cam3a/camera/Recieve/Subscribe2'
//  '<S13>'  : 'robot_cam3a/camera/Recieve/Subscribe2/Enabled Subsystem'

#endif                                 // RTW_HEADER_robot_cam3a_h_

//
// File trailer for generated code.
//
// [EOF]
//
