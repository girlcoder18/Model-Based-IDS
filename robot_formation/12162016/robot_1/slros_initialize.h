#ifndef _SLROS_INITIALIZE_H_
#define _SLROS_INITIALIZE_H_

#include "slros_busmsg_conversion.h"
#include "slros_generic.h"

extern ros::NodeHandle * SLROSNodePtr;
extern const std::string SLROSNodeName;

// For Block robot_1/robot_1/robot_position/robot_1_position
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_1_nav_msgs_Odometry> Sub_robot_1_4;

// For Block robot_1/robot_1/robot_position/robot_2_position
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_1_nav_msgs_Odometry> Sub_robot_1_25;

// For Block robot_1/robot_1/Command robot/Command Velocity Publisher/Publish2
extern SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_1_geometry_msgs_Twist> Pub_robot_1_173;

void slros_node_init(int argc, char** argv);

#endif
