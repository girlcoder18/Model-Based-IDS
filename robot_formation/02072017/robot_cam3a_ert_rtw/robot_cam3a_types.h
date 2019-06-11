//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_cam3a_types.h
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
#ifndef RTW_HEADER_robot_cam3a_types_h_
#define RTW_HEADER_robot_cam3a_types_h_
#include "rtwtypes.h"
#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Vector3_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Vector3_

// MsgType=geometry_msgs/Vector3
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_cam3a_geometry_msgs_Vector3;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Twist_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Twist_

// MsgType=geometry_msgs/Twist
typedef struct {
  // MsgType=geometry_msgs/Vector3
  SL_Bus_robot_cam3a_geometry_msgs_Vector3 Linear;

  // MsgType=geometry_msgs/Vector3
  SL_Bus_robot_cam3a_geometry_msgs_Vector3 Angular;
} SL_Bus_robot_cam3a_geometry_msgs_Twist;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_
#define DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_

typedef struct {
  uint32_T CurrentLength;
  uint32_T ReceivedLength;
} SL_Bus_ROSVariableLengthArrayInfo;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_ros_time_Time_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_ros_time_Time_

// MsgType=ros_time/Time
typedef struct {
  real_T Sec;
  real_T Nsec;
} SL_Bus_robot_cam3a_ros_time_Time;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_std_msgs_Header_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_std_msgs_Header_

// MsgType=std_msgs/Header
typedef struct {
  uint32_T Seq;

  // PrimitiveROSType=string:IsVarLen=1:VarLenCategory=data:VarLenElem=FrameId_SL_Info:TruncateAction=warn 
  uint8_T FrameId[128];

  // IsVarLen=1:VarLenCategory=length:VarLenElem=FrameId
  SL_Bus_ROSVariableLengthArrayInfo FrameId_SL_Info;

  // MsgType=ros_time/Time
  SL_Bus_robot_cam3a_ros_time_Time Stamp;
} SL_Bus_robot_cam3a_std_msgs_Header;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Point_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Point_

// MsgType=geometry_msgs/Point
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_cam3a_geometry_msgs_Point;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Quaternion_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Quaternion_

// MsgType=geometry_msgs/Quaternion
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
  real_T W;
} SL_Bus_robot_cam3a_geometry_msgs_Quaternion;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Pose_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_Pose_

// MsgType=geometry_msgs/Pose
typedef struct {
  // MsgType=geometry_msgs/Point
  SL_Bus_robot_cam3a_geometry_msgs_Point Position;

  // MsgType=geometry_msgs/Quaternion
  SL_Bus_robot_cam3a_geometry_msgs_Quaternion Orientation;
} SL_Bus_robot_cam3a_geometry_msgs_Pose;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_PoseWithCovariance_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_PoseWithCovariance_

// MsgType=geometry_msgs/PoseWithCovariance
typedef struct {
  real_T Covariance[36];

  // MsgType=geometry_msgs/Pose
  SL_Bus_robot_cam3a_geometry_msgs_Pose Pose;
} SL_Bus_robot_cam3a_geometry_msgs_PoseWithCovariance;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_TwistWithCovariance_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_geometry_msgs_TwistWithCovariance_

// MsgType=geometry_msgs/TwistWithCovariance
typedef struct {
  real_T Covariance[36];

  // MsgType=geometry_msgs/Twist
  SL_Bus_robot_cam3a_geometry_msgs_Twist Twist;
} SL_Bus_robot_cam3a_geometry_msgs_TwistWithCovariance;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_nav_msgs_Odometry_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_cam3a_nav_msgs_Odometry_

// MsgType=nav_msgs/Odometry
typedef struct {
  // PrimitiveROSType=string:IsVarLen=1:VarLenCategory=data:VarLenElem=ChildFrameId_SL_Info:TruncateAction=warn 
  uint8_T ChildFrameId[128];

  // IsVarLen=1:VarLenCategory=length:VarLenElem=ChildFrameId
  SL_Bus_ROSVariableLengthArrayInfo ChildFrameId_SL_Info;

  // MsgType=std_msgs/Header
  SL_Bus_robot_cam3a_std_msgs_Header Header;

  // MsgType=geometry_msgs/PoseWithCovariance
  SL_Bus_robot_cam3a_geometry_msgs_PoseWithCovariance Pose;

  // MsgType=geometry_msgs/TwistWithCovariance
  SL_Bus_robot_cam3a_geometry_msgs_TwistWithCovariance Twist;
} SL_Bus_robot_cam3a_nav_msgs_Odometry;

#endif

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

#ifndef typedef_robotics_slros_internal_blo_e_T
#define typedef_robotics_slros_internal_blo_e_T

typedef struct tag_saG5948SFTrUFnIbVUb0TZH robotics_slros_internal_blo_e_T;

#endif                                 //typedef_robotics_slros_internal_blo_e_T

#ifndef typedef_struct_T_robot_cam3a_T
#define typedef_struct_T_robot_cam3a_T

typedef struct {
  real_T f0[2];
} struct_T_robot_cam3a_T;

#endif                                 //typedef_struct_T_robot_cam3a_T

#ifndef typedef_struct_T_robot_cam3a_e_T
#define typedef_struct_T_robot_cam3a_e_T

typedef struct {
  char_T f0[4];
} struct_T_robot_cam3a_e_T;

#endif                                 //typedef_struct_T_robot_cam3a_e_T

#ifndef typedef_struct_T_robot_cam3a_el_T
#define typedef_struct_T_robot_cam3a_el_T

typedef struct {
  char_T f0[8];
} struct_T_robot_cam3a_el_T;

#endif                                 //typedef_struct_T_robot_cam3a_el_T

#ifndef typedef_struct_T_robot_cam3a_elq_T
#define typedef_struct_T_robot_cam3a_elq_T

typedef struct {
  char_T f0[7];
} struct_T_robot_cam3a_elq_T;

#endif                                 //typedef_struct_T_robot_cam3a_elq_T

#ifndef typedef_struct_T_robot_cam3a_elqs_T
#define typedef_struct_T_robot_cam3a_elqs_T

typedef struct {
  char_T f0[8];
  char_T f1[7];
  char_T f2[6];
} struct_T_robot_cam3a_elqs_T;

#endif                                 //typedef_struct_T_robot_cam3a_elqs_T

// Parameters (auto storage)
typedef struct P_robot_cam3a_T_ P_robot_cam3a_T;

// Forward declaration for rtModel
typedef struct tag_RTM_robot_cam3a_T RT_MODEL_robot_cam3a_T;

#endif                                 // RTW_HEADER_robot_cam3a_types_h_

//
// File trailer for generated code.
//
// [EOF]
//
