#ifndef _SLROS_INITIALIZE_H_
#define _SLROS_INITIALIZE_H_

#include "slros_busmsg_conversion.h"
#include "slros_generic.h"

extern ros::NodeHandle * SLROSNodePtr;
extern const std::string SLROSNodeName;

// For Block robot_one/camera/Subscribe1
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_one_nav_msgs_Odometry> Sub_robot_one_10;

// For Block robot_one/camera/Subscribe2
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_one_nav_msgs_Odometry> Sub_robot_one_11;

// For Block robot_one/Command robot/Command Velocity Publisher/Publish2
extern SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_one_geometry_msgs_Twist> Pub_robot_one_75;

void slros_node_init(int argc, char** argv);

#endif
