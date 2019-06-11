//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: triangle_types.h
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
#ifndef RTW_HEADER_triangle_types_h_
#define RTW_HEADER_triangle_types_h_
#include "rtwtypes.h"
#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Point_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Point_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_triangle_geometry_msgs_Point;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Vector3_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Vector3_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_triangle_geometry_msgs_Vector3;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Twist_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Twist_

typedef struct {
  SL_Bus_triangle_geometry_msgs_Vector3 Linear;
  SL_Bus_triangle_geometry_msgs_Vector3 Angular;
} SL_Bus_triangle_geometry_msgs_Twist;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_
#define DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_

typedef struct {
  uint32_T CurrentLength;
  uint32_T ReceivedLength;
} SL_Bus_ROSVariableLengthArrayInfo;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_ros_time_Time_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_ros_time_Time_

typedef struct {
  real_T Sec;
  real_T Nsec;
} SL_Bus_triangle_ros_time_Time;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_std_msgs_Header_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_std_msgs_Header_

typedef struct {
  uint32_T Seq;
  uint8_T FrameId[128];
  SL_Bus_ROSVariableLengthArrayInfo FrameId_SL_Info;
  SL_Bus_triangle_ros_time_Time Stamp;
} SL_Bus_triangle_std_msgs_Header;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Quaternion_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Quaternion_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
  real_T W;
} SL_Bus_triangle_geometry_msgs_Quaternion;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Pose_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_Pose_

typedef struct {
  SL_Bus_triangle_geometry_msgs_Point Position;
  SL_Bus_triangle_geometry_msgs_Quaternion Orientation;
} SL_Bus_triangle_geometry_msgs_Pose;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_PoseStamped_
#define DEFINED_TYPEDEF_FOR_SL_Bus_triangle_geometry_msgs_PoseStamped_

typedef struct {
  SL_Bus_triangle_std_msgs_Header Header;
  SL_Bus_triangle_geometry_msgs_Pose Pose;
} SL_Bus_triangle_geometry_msgs_PoseStamped;

#endif

// Custom Type definition for MATLAB Function: '<S3>/Conversion1'
#ifndef typedef_struct_T_triangle_T
#define typedef_struct_T_triangle_T

typedef struct {
  char_T f0[6];
  char_T f1[6];
} struct_T_triangle_T;

#endif                                 //typedef_struct_T_triangle_T

#ifndef typedef_b_struct_T_triangle_T
#define typedef_b_struct_T_triangle_T

typedef struct {
  char_T f0[8];
  char_T f1[4];
  char_T f2[2];
  char_T f3[5];
  real_T f4;
} b_struct_T_triangle_T;

#endif                                 //typedef_b_struct_T_triangle_T

#ifndef struct_tag_saG5948SFTrUFnIbVUb0TZH
#define struct_tag_saG5948SFTrUFnIbVUb0TZH

struct tag_saG5948SFTrUFnIbVUb0TZH
{
  int32_T isInitialized;
};

#endif                                 //struct_tag_saG5948SFTrUFnIbVUb0TZH

#ifndef typedef_robotics_slros_internal_block_T
#define typedef_robotics_slros_internal_block_T

typedef struct tag_saG5948SFTrUFnIbVUb0TZH robotics_slros_internal_block_T;

#endif                                 //typedef_robotics_slros_internal_block_T

#ifndef struct_tag_saG5948SFTrUFnIbVUb0TZH
#define struct_tag_saG5948SFTrUFnIbVUb0TZH

struct tag_saG5948SFTrUFnIbVUb0TZH
{
  int32_T isInitialized;
};

#endif                                 //struct_tag_saG5948SFTrUFnIbVUb0TZH

#ifndef typedef_robotics_slros_internal_blo_o_T
#define typedef_robotics_slros_internal_blo_o_T

typedef struct tag_saG5948SFTrUFnIbVUb0TZH robotics_slros_internal_blo_o_T;

#endif                                 //typedef_robotics_slros_internal_blo_o_T

#ifndef typedef_struct_T_triangle_o_T
#define typedef_struct_T_triangle_o_T

typedef struct {
  real_T f0[2];
} struct_T_triangle_o_T;

#endif                                 //typedef_struct_T_triangle_o_T

#ifndef typedef_struct_T_triangle_ou_T
#define typedef_struct_T_triangle_ou_T

typedef struct {
  char_T f0[4];
} struct_T_triangle_ou_T;

#endif                                 //typedef_struct_T_triangle_ou_T

#ifndef typedef_struct_T_triangle_oul_T
#define typedef_struct_T_triangle_oul_T

typedef struct {
  char_T f0[8];
} struct_T_triangle_oul_T;

#endif                                 //typedef_struct_T_triangle_oul_T

#ifndef typedef_struct_T_triangle_oulg_T
#define typedef_struct_T_triangle_oulg_T

typedef struct {
  char_T f0[7];
} struct_T_triangle_oulg_T;

#endif                                 //typedef_struct_T_triangle_oulg_T

#ifndef typedef_struct_T_triangle_oulgr_T
#define typedef_struct_T_triangle_oulgr_T

typedef struct {
  char_T f0[8];
  char_T f1[7];
  char_T f2[6];
} struct_T_triangle_oulgr_T;

#endif                                 //typedef_struct_T_triangle_oulgr_T

// Parameters (auto storage)
typedef struct P_triangle_T_ P_triangle_T;

// Forward declaration for rtModel
typedef struct tag_RTM_triangle_T RT_MODEL_triangle_T;

#endif                                 // RTW_HEADER_triangle_types_h_

//
// File trailer for generated code.
//
// [EOF]
//
