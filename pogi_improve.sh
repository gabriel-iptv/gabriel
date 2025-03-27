#!/data/data/com.termux/files/usr/bin/bash

# Display Developer Name
echo -e "\033[1;32mDeveloper: Gabriel\033[0m"

# Get Device Name
DEVICE_NAME=$(getprop ro.product.model)
echo -e "\033[1;32mDevice: $DEVICE_NAME\033[0m"

# Start Progress Bar
for i in {1..10}; do
    echo -ne "\033[1;32m["
    for ((j=0; j<i; j++)); do echo -ne "="; done
    for ((j=i; j<10; j++)); do echo -ne " "; done
    echo -ne "] $((i * 10))%\r"
    sleep 0.2
done
echo -e "\n\033[1;32mApplying Low-End Device Optimizations...\033[0m"

# Lock Refresh Rate to 60Hz or 90Hz (whichever is supported)
cmd settings put system peak_refresh_rate 90
cmd settings put system min_refresh_rate 60

# Reduce System UI Animations for Faster Performance
cmd settings put global window_animation_scale 0.25
cmd settings put global transition_animation_scale 0.25
cmd settings put global animator_duration_scale 0.25

# Clean RAM by Killing Unused Apps
echo -e "\033[1;32mClearing Background Apps...\033[0m"
cmd activity recents clear
am kill-all

# Optimize CPU Usage for Low-End Devices
cmd settings put global game_driver_all_apps 1
cmd settings put global force_gpu_rendering 1
cmd settings put global hwui_force_gpu_rendering 1

# Apply Memory Management Tweaks (Temporary)
echo 3 > /proc/sys/vm/drop_caches

# Finish
echo -e "\033[1;32m✔ Low-End Device Boost Applied Successfully!\033[0m"
