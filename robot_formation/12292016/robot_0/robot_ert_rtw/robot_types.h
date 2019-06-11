//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: robot_types.h
//
// Code generated for Simulink model 'robot'.
//
// Model version                  : 1.11
// Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
// C/C++ source code generated on : Fri Dec 30 17:22:59 2016
//
// Target selection: ert.tlc
// Embedded hardware selection: Generic->Unspecified (assume 32-bit Generic)
// Code generation objectives: Unspecified
// Validation result: Not run
//
#ifndef RTW_HEADER_robot_types_h_
#define RTW_HEADER_robot_types_h_
#include "rtwtypes.h"
#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Point_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Point_

// MsgType=geometry_msgs/Point
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_geometry_msgs_Point;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Vector3_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Vector3_

// MsgType=geometry_msgs/Vector3
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
} SL_Bus_robot_geometry_msgs_Vector3;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Twist_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Twist_

// MsgType=geometry_msgs/Twist
typedef struct {
  // MsgType=geometry_msgs/Vector3
  SL_Bus_robot_geometry_msgs_Vector3 Linear;

  // MsgType=geometry_msgs/Vector3
  SL_Bus_robot_geometry_msgs_Vector3 Angular;
} SL_Bus_robot_geometry_msgs_Twist;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_
#define DEFINED_TYPEDEF_FOR_SL_Bus_ROSVariableLengthArrayInfo_

typedef struct {
  uint32_T CurrentLength;
  uint32_T ReceivedLength;
} SL_Bus_ROSVariableLengthArrayInfo;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_ros_time_Time_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_ros_time_Time_

// MsgType=ros_time/Time
typedef struct {
  real_T Sec;
  real_T Nsec;
} SL_Bus_robot_ros_time_Time;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_std_msgs_Header_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_std_msgs_Header_

// MsgType=std_msgs/Header
typedef struct {
  uint32_T Seq;

  // PrimitiveROSType=string:IsVarLen=1:VarLenCategory=data:VarLenElem=FrameId_SL_Info:TruncateAction=warn 
  uint8_T FrameId[128];

  // IsVarLen=1:VarLenCategory=length:VarLenElem=FrameId
  SL_Bus_ROSVariableLengthArrayInfo FrameId_SL_Info;

  // MsgType=ros_time/Time
  SL_Bus_robot_ros_time_Time Stamp;
} SL_Bus_robot_std_msgs_Header;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Quaternion_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Quaternion_

// MsgType=geometry_msgs/Quaternion
typedef struct {
  real_T X;
  real_T Y;
  real_T Z;
  real_T W;
} SL_Bus_robot_geometry_msgs_Quaternion;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Pose_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_Pose_

// MsgType=geometry_msgs/Pose
typedef struct {
  // MsgType=geometry_msgs/Point
  SL_Bus_robot_geometry_msgs_Point Position;

  // MsgType=geometry_msgs/Quaternion
  SL_Bus_robot_geometry_msgs_Quaternion Orientation;
} SL_Bus_robot_geometry_msgs_Pose;

#endif

#ifndef DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_PoseStamped_
#define DEFINED_TYPEDEF_FOR_SL_Bus_robot_geometry_msgs_PoseStamped_

// MsgType=geometry_msgs/PoseStamped
typedef struct {
  // MsgType=std_msgs/Header
  SL_Bus_robot_std_msgs_Header Header;

  // MsgType=geometry_msgs/Pose
  SL_Bus_robot_geometry_msgs_Pose Pose;
} SL_Bus_robot_geometry_msgs_PoseStamped;

#endif

// Custom Type definition for MATLAB Function: '<S3>/Conversion1'
#ifndef typedef_struct_T_robot_T
#define typedef_struct_T_robot_T

typedef struct {
  char_T f0[6];
  char_T f1[6];
} struct_T_robot_T;

#endif                                 //typedef_struct_T_robot_T

#ifndef typedef_b_struct_T_robot_T
#define typedef_b_struct_T_robot_T

typedef struct {
  char_T f0[8];
  char_T f1[4];
  char_T f2[2];
  char_T f3[5];
  real_T f4;
} b_struct_T_robot_T;

#endif                                 //typedef_b_struct_T_robot_T

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

#ifndef typedef_robotics_slros_internal_blo_h_T
#define typedef_robotics_slros_internal_blo_h_T

typedef struct tag_saG5948SFTrUFnIbVUb0TZH robotics_slros_internal_blo_h_T;

#endif                                 //typedef_robotics_slros_internal_blo_h_T

#ifndef typedef_struct_T_robot_h_T
#define typedef_struct_T_robot_h_T

typedef struct {
  real_T f0[2];
} struct_T_robot_h_T;

#endif                                 //typedef_struct_T_robot_h_T

#ifndef typedef_struct_T_robot_hx_T
#define typedef_struct_T_robot_hx_T

typedef struct {
  char_T f0[4];
} struct_T_robot_hx_T;

#endif                                 //typedef_struct_T_robot_hx_T

#ifndef typedef_struct_T_robot_hxl_T
#define typedef_struct_T_robot_hxl_T

typedef struct {
  char_T f0[8];
} struct_T_robot_hxl_T;

#endif                                 //typedef_struct_T_robot_hxl_T

#ifndef typedef_struct_T_robot_hxlz_T
#define typedef_struct_T_robot_hxlz_T

typedef struct {
  char_T f0[7];
} struct_T_robot_hxlz_T;

#endif                                 //typedef_struct_T_robot_hxlz_T

#ifndef typedef_struct_T_robot_hxlzi_T
#define typedef_struct_T_robot_hxlzi_T

typedef struct {
  char_T f0[8];
  char_T f1[7];
  char_T f2[6];
} struct_T_robot_hxlzi_T;

#endif                                 //typedef_struct_T_robot_hxlzi_T

// Parameters (auto storage)
typedef struct P_robot_T_ P_robot_T;

// Forward declaration for rtModel
typedef struct tag_RTM_robot_T RT_MODEL_robot_T;

#endif                                 // RTW_HEADER_robot_types_h_

//
// File trailer for generated code.
//
// [EOF]
//
