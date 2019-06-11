#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot";

// For Block robot/camera/Subscribe1
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_geometry_msgs_PoseStamped> Sub_robot_10;

// For Block robot/camera/Subscribe2
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_geometry_msgs_PoseStamped> Sub_robot_11;

// For Block robot/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_geometry_msgs_Twist> Pub_robot_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

