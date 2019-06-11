#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "triangle";

// For Block triangle/camera/Subscribe1
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_triangle_geometry_msgs_PoseStamped> Sub_triangle_948;

// For Block triangle/camera/Subscribe2
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_triangle_geometry_msgs_PoseStamped> Sub_triangle_949;

// For Block triangle/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_triangle_geometry_msgs_Twist> Pub_triangle_905;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

