#ifndef _SLROS_INITIALIZE_H_
#define _SLROS_INITIALIZE_H_

#include "slros_busmsg_conversion.h"
#include "slros_generic.h"

extern ros::NodeHandle * SLROSNodePtr;
extern const std::string SLROSNodeName;

// For Block robot_cam2/camera/Subscribe1
extern SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_cam2_geometry_msgs_PoseStamped> Sub_robot_cam2_10;

// For Block robot_cam2/camera/Subscribe2
extern SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_cam2_geometry_msgs_PoseStamped> Sub_robot_cam2_11;

// For Block robot_cam2/Command robot/Command Velocity Publisher/Publish2
extern SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_cam2_geometry_msgs_Twist> Pub_robot_cam2_75;

void slros_node_init(int argc, char** argv);

#endif
