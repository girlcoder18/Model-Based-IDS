//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_1_types.h
//
// Code generated for Simulink model 'robot_1'.
//
// Model version                  : 1.27
// Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
// C/C++ source code generated on : Mon Jun 13 22:53:13 2016
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#ifndef RTW_HEADER_robot_1_types_h_
#define RTW_HEADER_robot_1_types_h_
#include "rtwtypes.h"
#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Vector3_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Vector3_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_1_geometry_msgs_Vector3;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Twist_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Twist_

typedef struct {
  SL_Bus_robot_1_geometry_msgs_Vector3 Linear;
  SL_Bus_robot_1_geometry_msgs_Vector3 Angular;
} SL_Bus_robot_1_geometry_msgs_Twist;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_
#define DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_

typedef struct {
  uint32_T CurrentLength;
  uint32_T ReceivedLength;
} SL_Bus_ROSVariableLengthArrayInfo;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_ros_time_Time_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_ros_time_Time_

typedef struct {
  int32_T Sec;
  int32_T Nsec;
} SL_Bus_robot_1_ros_time_Time;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_std_msgs_Header_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_std_msgs_Header_

typedef struct {
  uint32_T Seq;
  uint8_T FrameId[128];
  SL_Bus_ROSVariableLengthArrayInfo FrameId_SL_Info;
  SL_Bus_robot_1_ros_time_Time Stamp;
} SL_Bus_robot_1_std_msgs_Header;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Point_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Point_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_1_geometry_msgs_Point;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Quaternion_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Quaternion_

typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
  real_T W;
} SL_Bus_robot_1_geometry_msgs_Quaternion;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Pose_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_Pose_

typedef struct {
  SL_Bus_robot_1_geometry_msgs_Point Position;
  SL_Bus_robot_1_geometry_msgs_Quaternion Orientation;
} SL_Bus_robot_1_geometry_msgs_Pose;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_PoseWithCovariance_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_PoseWithCovariance_

typedef struct {
  real_T Covariance[36];
  SL_Bus_robot_1_geometry_msgs_Pose Pose;
} SL_Bus_robot_1_geometry_msgs_PoseWithCovariance;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_TwistWithCovariance_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_geometry_msgs_TwistWithCovariance_

typedef struct {
  real_T Covariance[36];
  SL_Bus_robot_1_geometry_msgs_Twist Twist;
} SL_Bus_robot_1_geometry_msgs_TwistWithCovariance;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_nav_msgs_Odometry_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_1_nav_msgs_Odometry_

typedef struct {
  uint8_T ChildFrameId[128];
  SL_Bus_ROSVariableLengthArrayInfo ChildFrameId_SL_Info;
  SL_Bus_robot_1_std_msgs_Header Header;
  SL_Bus_robot_1_geometry_msgs_PoseWithCovariance Pose;
  SL_Bus_robot_1_geometry_msgs_TwistWithCovariance Twist;
} SL_Bus_robot_1_nav_msgs_Odometry;

#endif

// Custom Type definition for MATLAB Function: '<S5>/Conversion1'
#ifndef typedef_struct_T_robot_1_T
#define typedef_struct_T_robot_1_T

typedef struct {
  char_T f0[6];
  char_T f1[6];
} struct_T_robot_1_T;

#endif                                 //typedef_struct_T_robot_1_T

#ifndef typedef_b_struct_T_robot_1_T
#define typedef_b_struct_T_robot_1_T

typedef struct {
  char_T f0[8];
  char_T f1[4];
  char_T f2[2];
  char_T f3[5];
  real_T f4;
} b_struct_T_robot_1_T;

#endif                                 //typedef_b_struct_T_robot_1_T

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

#ifndef typedef_robotics_slros_internal_blo_d_T
#define typedef_robotics_slros_internal_blo_d_T

typedef struct tag_saG5948SFTrUFnIbVUb0TZH robotics_slros_internal_blo_d_T;

#endif                                 //typedef_robotics_slros_internal_blo_d_T

#ifndef typedef_struct_T_robot_1_d_T
#define typedef_struct_T_robot_1_d_T

typedef struct {
  char_T f0[4];
} struct_T_robot_1_d_T;

#endif                                 //typedef_struct_T_robot_1_d_T

#ifndef typedef_struct_T_robot_1_dv_T
#define typedef_struct_T_robot_1_dv_T

typedef struct {
  char_T f0[8];
} struct_T_robot_1_dv_T;

#endif                                 //typedef_struct_T_robot_1_dv_T

#ifndef typedef_struct_T_robot_1_dv4_T
#define typedef_struct_T_robot_1_dv4_T

typedef struct {
  char_T f0[7];
} struct_T_robot_1_dv4_T;

#endif                                 //typedef_struct_T_robot_1_dv4_T

#ifndef typedef_struct_T_robot_1_dv4i_T
#define typedef_struct_T_robot_1_dv4i_T

typedef struct {
  char_T f0[8];
  char_T f1[7];
  char_T f2[6];
} struct_T_robot_1_dv4i_T;

#endif                                 //typedef_struct_T_robot_1_dv4i_T

// Parameters (auto storage)
typedef struct P_robot_1_T_ P_robot_1_T;

// Forward declaration for rtModel
typedef struct tag_RTM_robot_1_T RT_MODEL_robot_1_T;

#endif                                 // RTW_HEADER_robot_1_types_h_

//
// File trailer for generated code.
//
// [EOF]
//
