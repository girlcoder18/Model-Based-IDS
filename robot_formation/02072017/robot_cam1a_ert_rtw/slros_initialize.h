#ifndef _SLROS_INITIALIZE_H_
#define _SLROS_INITIALIZE_H_

#include "slros_busmsg_conversion.h"
#include "slros_generic.h"

extern ros::NodeHandle * SLROSNodePtr;
extern const std::string SLROSNodeName;

// For Block robot_cam1a/camera/Recieve/Subscribe2
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_cam1a_nav_msgs_Odometry> Sub_robot_cam1a_11;

// For Block robot_cam1a/Command robot/Command Velocity Publisher/Publish2
extern SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_cam1a_geometry_msgs_Twist> Pub_robot_cam1a_75;

void slros_node_init(int argc, char** argv);

#endif
