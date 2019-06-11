//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: wheel1.h
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
#ifndef RTW_HEADER_wheel1_h_
#define RTW_HEADER_wheel1_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef wheel1_COMMON_INCLUDES_
# define wheel1_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "slros_initialize.h"
#endif                                 // wheel1_COMMON_INCLUDES_

#include "wheel1_types.h"
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
  SL_Bus_wheel1_nav_msgs_Odometry In1; // '<S10>/In1'
  SL_Bus_wheel1_nav_msgs_Odometry varargout_2;
  SL_Bus_wheel1_geometry_msgs_Twist BusAssignment1;// '<S1>/Bus Assignment1'
  real_T Sum1;                         // '<S3>/Sum1'
} B_wheel1_T;

// Block states (auto storage) for system '<Root>'
typedef struct {
  void *SourceBlock_PWORK;             // '<S4>/SourceBlock'
  void *SinkBlock_PWORK;               // '<S6>/SinkBlock'
  void *SimulationRateControl_PWORK;   // '<Root>/Simulation Rate Control'
  robotics_slros_internal_block_T obj; // '<S6>/SinkBlock'
  ExampleHelperSimulationRateCo_T obj_c;// '<Root>/Simulation Rate Control'
  robotics_slros_internal_blo_k_T obj_d;// '<S4>/SourceBlock'
} DW_wheel1_T;

// Parameters (auto storage)
struct P_wheel1_T_ {
  real_T DistanceThreshold_const;      // Mask Parameter: DistanceThreshold_const
                                       //  Referenced by: '<S7>/Constant'

  real_T GainSlider_gain;              // Mask Parameter: GainSlider_gain
                                       //  Referenced by: '<S8>/Slider Gain'

  real_T LinearVelocitySlider_gain;    // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S9>/Slider Gain'

  SL_Bus_wheel1_nav_msgs_Odometry Out1_Y0;// Computed Parameter: Out1_Y0
                                          //  Referenced by: '<S10>/Out1'

  SL_Bus_wheel1_nav_msgs_Odometry Constant_Value;// Computed Parameter: Constant_Value
                                                 //  Referenced by: '<S4>/Constant'

  SL_Bus_wheel1_geometry_msgs_Twist Constant_Value_p;// Computed Parameter: Constant_Value_p
                                                     //  Referenced by: '<S5>/Constant'

  real_T Saturation_UpperSat;          // Expression: 0.5
                                       //  Referenced by: '<S3>/Saturation'

  real_T Saturation_LowerSat;          // Expression: -0.5
                                       //  Referenced by: '<S3>/Saturation'

  real_T LinearVelocityv_Y0;           // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S3>/Linear Velocity (v)'

  real_T AngularVelocityw_Y0;          // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S3>/Angular Velocity (w)'

  real_T Constant_Value_a;             // Expression: 1
                                       //  Referenced by: '<S3>/Constant'

  real_T Stop_Value;                   // Expression: 0
                                       //  Referenced by: '<S3>/Stop'

  real_T DesiredPosition_Value[2];     // Expression: [-1 0]
                                       //  Referenced by: '<Root>/Desired Position'

};

// Real-time Model Data Structure
struct tag_RTM_wheel1_T {
  const char_T *errorStatus;
};

#ifdef __cplusplus

extern "C" {

#endif

#ifdef __cplusplus

}
#endif

// Class declaration for model wheel1
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
  RT_MODEL_wheel1_T * getRTM();

  // private data and function members
 private:
  // Tunable parameters
  P_wheel1_T wheel1_P;

  // Block signals
  B_wheel1_T wheel1_B;

  // Block states
  DW_wheel1_T wheel1_DW;

  // Real-Time Model
  RT_MODEL_wheel1_T wheel1_M;
};

//-
//  These blocks were eliminated from the model due to optimizations:
//
//  Block '<Root>/Display' : Unused code path elimination
//  Block '<Root>/Display1' : Unused code path elimination
//  Block '<Root>/Display2' : Unused code path elimination
//  Block '<Root>/Scope' : Unused code path elimination
//  Block '<Root>/To Workspace' : Unused code path elimination
//  Block '<Root>/To Workspace1' : Unused code path elimination
//  Block '<Root>/To Workspace2' : Unused code path elimination


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
//  '<Root>' : 'wheel1'
//  '<S1>'   : 'wheel1/Command Velocity Publisher'
//  '<S2>'   : 'wheel1/Conversion'
//  '<S3>'   : 'wheel1/Proportional Controller'
//  '<S4>'   : 'wheel1/Subscribe'
//  '<S5>'   : 'wheel1/Command Velocity Publisher/Blank Message'
//  '<S6>'   : 'wheel1/Command Velocity Publisher/Publish2'
//  '<S7>'   : 'wheel1/Proportional Controller/Distance Threshold'
//  '<S8>'   : 'wheel1/Proportional Controller/Gain (Slider)'
//  '<S9>'   : 'wheel1/Proportional Controller/Linear Velocity (Slider)'
//  '<S10>'  : 'wheel1/Subscribe/Enabled Subsystem'

#endif                                 // RTW_HEADER_wheel1_h_

//
// File trailer for generated code.
//
// [EOF]
//
