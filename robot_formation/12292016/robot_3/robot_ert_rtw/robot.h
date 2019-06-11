//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot.h
//
// Code generated for Simulink model 'robot'.
//
// Model version                  : 1.15
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Fri Dec 30 17:27:04 2016
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#ifndef RTW_HEADER_robot_h_
#define RTW_HEADER_robot_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef robot_COMMON_INCLUDES_
# define robot_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "slros_initialize.h"
#endif                                 // robot_COMMON_INCLUDES_

#include "robot_types.h"
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

// Block signals for system '<S3>/Conversion1'
typedef struct {
  real_T yaw;                          // '<S3>/Conversion1'
} B_Conversion1_robot_T;

// Block signals (auto storage)
typedef struct {
  SL_Bus_robot_geometry_msgs_PoseStamped In1;// '<S16>/In1'
  SL_Bus_robot_geometry_msgs_PoseStamped In1_d;// '<S15>/In1'
  SL_Bus_robot_geometry_msgs_PoseStamped varargout_2;
  SL_Bus_robot_geometry_msgs_Twist BusAssignment1;// '<S5>/Bus Assignment1'
  real_T Sum1;                         // '<S9>/Sum1'
  real_T Sum;                          // '<S9>/Sum'
  real_T Sum3;                         // '<S9>/Sum3'
  real_T Switch1;
  B_Conversion1_robot_T sf_Conversion2;// '<S3>/Conversion2'
  B_Conversion1_robot_T sf_Conversion1;// '<S3>/Conversion1'
} B_robot_T;

// Block states (auto storage) for system '<Root>'
typedef struct {
  void *SourceBlock_PWORK;             // '<S14>/SourceBlock'
  void *SourceBlock_PWORK_j;           // '<S13>/SourceBlock'
  void *SinkBlock_PWORK;               // '<S8>/SinkBlock'
  robotics_slros_internal_block_T obj; // '<S8>/SinkBlock'
  robotics_slros_internal_blo_h_T obj_o;// '<S14>/SourceBlock'
  robotics_slros_internal_blo_h_T obj_n;// '<S13>/SourceBlock'
} DW_robot_T;

// Parameters (auto storage)
struct P_robot_T_ {
  real_T speedThreshold2_const;        // Mask Parameter: speedThreshold2_const
                                       //  Referenced by: '<S10>/Constant'

  real_T LinearVelocitySlider_gain;    // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S6>/Slider Gain'

  SL_Bus_robot_geometry_msgs_PoseStamped Out1_Y0;// Computed Parameter: Out1_Y0
                                                 //  Referenced by: '<S15>/Out1'

  SL_Bus_robot_geometry_msgs_PoseStamped Constant_Value;// Computed Parameter: Constant_Value
                                                        //  Referenced by: '<S13>/Constant'

  SL_Bus_robot_geometry_msgs_PoseStamped Out1_Y0_p;// Computed Parameter: Out1_Y0_p
                                                   //  Referenced by: '<S16>/Out1'

  SL_Bus_robot_geometry_msgs_PoseStamped Constant_Value_m;// Computed Parameter: Constant_Value_m
                                                          //  Referenced by: '<S14>/Constant'

  SL_Bus_robot_geometry_msgs_Twist Constant_Value_p;// Computed Parameter: Constant_Value_p
                                                    //  Referenced by: '<S7>/Constant'

  real_T LinearVelocityv_Y0;           // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S9>/Linear Velocity (v)'

  real_T AngularVelocityw_Y0;          // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S9>/Angular Velocity (w)'

  real_T Stop1_Value;                  // Expression: 0
                                       //  Referenced by: '<S9>/Stop1'

};

// Real-time Model Data Structure
struct tag_RTM_robot_T {
  const char_T *errorStatus;
};

#ifdef __cplusplus

extern "C" {

#endif

#ifdef __cplusplus

}
#endif

// Class declaration for model robot
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
  RT_MODEL_robot_T * getRTM();

  // private data and function members
 private:
  // Tunable parameters
  P_robot_T robot_P;

  // Block signals
  B_robot_T robot_B;

  // Block states
  DW_robot_T robot_DW;

  // Real-Time Model
  RT_MODEL_robot_T robot_M;
};

//-
//  These blocks were eliminated from the model due to optimizations:
//
//  Block '<S3>/Real-Imag to Complex' : Unused code path elimination
//  Block '<S3>/Real-Imag to Complex1' : Unused code path elimination
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
//  '<Root>' : 'robot'
//  '<S1>'   : 'robot/Command robot'
//  '<S2>'   : 'robot/Compute robot velocity'
//  '<S3>'   : 'robot/camera'
//  '<S4>'   : 'robot/cyc_pursuit2'
//  '<S5>'   : 'robot/Command robot/Command Velocity Publisher'
//  '<S6>'   : 'robot/Command robot/Linear Velocity (Slider)'
//  '<S7>'   : 'robot/Command robot/Command Velocity Publisher/Blank Message'
//  '<S8>'   : 'robot/Command robot/Command Velocity Publisher/Publish2'
//  '<S9>'   : 'robot/Compute robot velocity/Proportional Controller'
//  '<S10>'  : 'robot/Compute robot velocity/Proportional Controller/speed Threshold2'
//  '<S11>'  : 'robot/camera/Conversion1'
//  '<S12>'  : 'robot/camera/Conversion2'
//  '<S13>'  : 'robot/camera/Subscribe1'
//  '<S14>'  : 'robot/camera/Subscribe2'
//  '<S15>'  : 'robot/camera/Subscribe1/Enabled Subsystem'
//  '<S16>'  : 'robot/camera/Subscribe2/Enabled Subsystem'

#endif                                 // RTW_HEADER_robot_h_

//
// File trailer for generated code.
//
// [EOF]
//
