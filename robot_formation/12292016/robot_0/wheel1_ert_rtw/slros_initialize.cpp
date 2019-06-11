#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "wheel1";

// For Block wheel1/Subscribe
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_wheel1_nav_msgs_Odometry> Sub_wheel1_187;

// For Block wheel1/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_wheel1_geometry_msgs_Twist> Pub_wheel1_155;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

