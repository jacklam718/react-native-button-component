#! /bin/bash

BLUE_COLOR='\033[1;34m'
NO_COLOR='\033[0m'

spinkitPacakge='react-native-spinkit'
linearGradientPackage='react-native-linear-gradient'

react-native link $spinkitPacakge
react-native link $linearGradientPackage

# printf "\nLinked ${BLUE_COLOR}${spinkitPacakge}${NO_COLOR} and ${BLUE_COLOR}${spinkitPacakge}${linearGradientPackage}${NO_COLOR}\n"
