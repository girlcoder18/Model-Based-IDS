//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_private.h
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
#ifndef RTW_HEADER_robot_private_h_
#define RTW_HEADER_robot_private_h_
#include "rtwtypes.h"
#include "robot.h"

extern real_T rt_atan2d_snf(real_T u0, real_T u1);
extern real_T rt_powd_snf(real_T u0, real_T u1);
extern void robot_Conversion1(real_T rtu_x, real_T rtu_y, real_T rtu_z, real_T
  rtu_w, B_Conversion1_robot_T *localB);

#endif                                 // RTW_HEADER_robot_private_h_

//
// File trailer for generated code.
//
// [EOF]
//
