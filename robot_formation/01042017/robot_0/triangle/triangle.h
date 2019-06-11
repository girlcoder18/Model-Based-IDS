//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: triangle.h
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
#ifndef RTW_HEADER_triangle_h_
#define RTW_HEADER_triangle_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef triangle_COMMON_INCLUDES_
# define triangle_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "rtw_continuous.h"
#include "rtw_solver.h"
#include "slros_initialize.h"
#endif                                 // triangle_COMMON_INCLUDES_

#include "triangle_types.h"
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
} B_Conversion1_triangle_T;

// Block signals (auto storage)
typedef struct {
  SL_Bus_triangle_geometry_msgs_PoseStamped In1;// '<S16>/In1'
  SL_Bus_triangle_geometry_msgs_PoseStamped In1_m;// '<S15>/In1'
  SL_Bus_triangle_geometry_msgs_PoseStamped varargout_2;
  SL_Bus_triangle_geometry_msgs_Twist BusAssignment1;// '<S5>/Bus Assignment1'
  real_T Distance1;                    // '<S8>/Distance1'
  real_T Sum1;                         // '<S8>/Sum1'
  real_T Sum;                          // '<S8>/Sum'
  real_T rtb_Distance1_m;
  B_Conversion1_triangle_T sf_Conversion2;// '<S3>/Conversion2'
  B_Conversion1_triangle_T sf_Conversion1;// '<S3>/Conversion1'
} B_triangle_T;

// Block states (auto storage) for system '<Root>'
typedef struct {
  void *SourceBlock_PWORK;             // '<S14>/SourceBlock'
  void *SourceBlock_PWORK_b;           // '<S13>/SourceBlock'
  void *SinkBlock_PWORK;               // '<S7>/SinkBlock'
  robotics_slros_internal_block_T obj; // '<S7>/SinkBlock'
  robotics_slros_internal_blo_o_T obj_p;// '<S14>/SourceBlock'
  robotics_slros_internal_blo_o_T obj_l;// '<S13>/SourceBlock'
} DW_triangle_T;

// Parameters (auto storage)
struct P_triangle_T_ {
  real_T DistanceThreshold_const;      // Mask Parameter: DistanceThreshold_const
                                       //  Referenced by: '<S9>/Constant'

  real_T LinearVelocitySlider_gain;    // Mask Parameter: LinearVelocitySlider_gain
                                       //  Referenced by: '<S10>/Slider Gain'

  SL_Bus_triangle_geometry_msgs_PoseStamped Out1_Y0;// Computed Parameter: Out1_Y0
                                                    //  Referenced by: '<S15>/Out1'

  SL_Bus_triangle_geometry_msgs_PoseStamped Constant_Value;// Computed Parameter: Constant_Value
                                                           //  Referenced by: '<S13>/Constant'

  SL_Bus_triangle_geometry_msgs_PoseStamped Out1_Y0_c;// Computed Parameter: Out1_Y0_c
                                                      //  Referenced by: '<S16>/Out1'

  SL_Bus_triangle_geometry_msgs_PoseStamped Constant_Value_d;// Computed Parameter: Constant_Value_d
                                                             //  Referenced by: '<S14>/Constant'

  SL_Bus_triangle_geometry_msgs_Twist Constant_Value_d0;// Computed Parameter: Constant_Value_d0
                                                        //  Referenced by: '<S6>/Constant'

  real_T LinearVelocityv_Y0;           // Computed Parameter: LinearVelocityv_Y0
                                       //  Referenced by: '<S8>/Linear Velocity (v)'

  real_T AngularVelocityw_Y0;          // Computed Parameter: AngularVelocityw_Y0
                                       //  Referenced by: '<S8>/Angular Velocity (w)'

  real_T Stop_Value;                   // Expression: 0
                                       //  Referenced by: '<S8>/Stop'

};

// Real-time Model Data Structure
struct tag_RTM_triangle_T {
  const char_T *errorStatus;
};

#ifdef __cplusplus

extern "C" {

#endif

#ifdef __cplusplus

}
#endif

// Class declaration for model triangle
class Example3ModelClass {
  // public data and function members
 public:
  // model initialize function
  void initialize();

  // model step function
  void step();

  // model terminate function
  void terminate();

  // Constructor
  Example3ModelClass();

  // Destructor
  ~Example3ModelClass();

  // Real-Time Model get method
  RT_MODEL_triangle_T * getRTM();

  // private data and function members
 private:
  // Tunable parameters
  P_triangle_T triangle_P;

  // Block signals
  B_triangle_T triangle_B;

  // Block states
  DW_triangle_T triangle_DW;

  // Real-Time Model
  RT_MODEL_triangle_T triangle_M;
};

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
//  '<Root>' : 'triangle'
//  '<S1>'   : 'triangle/Command robot'
//  '<S2>'   : 'triangle/Compute robot velocity'
//  '<S3>'   : 'triangle/camera'
//  '<S4>'   : 'triangle/cyc_pursuit2'
//  '<S5>'   : 'triangle/Command robot/Command Velocity Publisher'
//  '<S6>'   : 'triangle/Command robot/Command Velocity Publisher/Blank Message'
//  '<S7>'   : 'triangle/Command robot/Command Velocity Publisher/Publish2'
//  '<S8>'   : 'triangle/Compute robot velocity/Proportional Controller1'
//  '<S9>'   : 'triangle/Compute robot velocity/Proportional Controller1/Distance Threshold'
//  '<S10>'  : 'triangle/Compute robot velocity/Proportional Controller1/Linear Velocity (Slider)'
//  '<S11>'  : 'triangle/camera/Conversion1'
//  '<S12>'  : 'triangle/camera/Conversion2'
//  '<S13>'  : 'triangle/camera/Subscribe1'
//  '<S14>'  : 'triangle/camera/Subscribe2'
//  '<S15>'  : 'triangle/camera/Subscribe1/Enabled Subsystem'
//  '<S16>'  : 'triangle/camera/Subscribe2/Enabled Subsystem'

#endif                                 // RTW_HEADER_triangle_h_

//
// File trailer for generated code.
//
// [EOF]
//
