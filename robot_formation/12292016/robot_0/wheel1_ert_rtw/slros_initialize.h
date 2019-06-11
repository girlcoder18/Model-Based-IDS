#ifndef _SLROS_INITIALIZE_H_
#define _SLROS_INITIALIZE_H_

#include "slros_busmsg_conversion.h"
#include "slros_generic.h"

extern ros::NodeHandle * SLROSNodePtr;
extern const std::string SLROSNodeName;

// For Block wheel1/Subscribe
extern SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_wheel1_nav_msgs_Odometry> Sub_wheel1_187;

// For Block wheel1/Command Velocity Publisher/Publish2
extern SimulinkPublisher<geometry_msgs::Twist, SL_Bus_wheel1_geometry_msgs_Twist> Pub_wheel1_155;

void slros_node_init(int argc, char** argv);

#endif
