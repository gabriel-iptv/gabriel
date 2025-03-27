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
echo -e "\n\033[1;32mApplying Optimizations...\033[0m"

# Lock Refresh Rate to 60Hz or 90Hz (Root Required)
if [[ $(id -u) -eq 0 ]]; then
    echo -e "\033[1;32mApplying Refresh Rate Settings...\033[0m"
    settings put system peak_refresh_rate 90
    settings put system min_refresh_rate 60
fi

# Reduce System UI Animations (Works on Non-Root)
echo -e "\033[1;32mReducing System UI Animations...\033[0m"
settings put global window_animation_scale 0.25
settings put global transition_animation_scale 0.25
settings put global animator_duration_scale 0.25

# Clear Background Apps (Fixed)
echo -e "\033[1;32mClearing Background Apps...\033[0m"
am force-stop com.android.systemui
am force-stop com.google.android.gms

# Optimize CPU/GPU (Works on Non-Root)
echo -e "\033[1;32mOptimizing CPU & GPU...\033[0m"
settings put global game_driver_all_apps 1
settings put global force_gpu_rendering 1
settings put global hwui_force_gpu_rendering 1

# Clear RAM Cache (Root Only)
if [[ $(id -u) -eq 0 ]]; then
    echo -e "\033[1;32mClearing RAM Cache...\033[0m"
    echo 3 > /proc/sys/vm/drop_caches
else
    echo -e "\033[1;31mSkipping RAM Cache Clear (Root Required)\033[0m"
fi

# Finish
echo -e "\033[1;32m✔ Optimizations Applied Successfully!\033[0m"
