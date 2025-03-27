#!/data/data/com.termux/files/usr/bin/bash

# ASCII Banner
echo -e "\033[1;32m"
echo "██████╗ ███████╗███████╗███████╗ █████╗ ███╗   ███╗███████╗"
echo "██╔══██╗██╔════╝╚══███╔╝╚══███╔╝██╔══██╗████╗ ████║██╔════╝"
echo "██████╔╝█████╗    ███╔╝   ███╔╝ ███████║██╔████╔██║█████╗  "
echo "██╔═══╝ ██╔══╝   ███╔╝   ███╔╝  ██╔══██║██║╚██╔╝██║██╔══╝  "
echo "██║     ███████╗███████╗███████╗██║  ██║██║ ╚═╝ ██║███████╗"
echo "╚═╝     ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝"
echo -e "\033[0m"

# Display Developer Name and Device Name
echo -e "\033[1;32mDeveloper: Gabriel\033[0m"
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

# Reduce System UI Animations (Non-Root)
echo -e "\033[1;32mReducing System UI Animations...\033[0m"
settings put global window_animation_scale 0.5
settings put global transition_animation_scale 0.5
settings put global animator_duration_scale 0.5

# Optimize CPU/GPU (Non-Root)
echo -e "\033[1;32mOptimizing CPU & GPU...\033[0m"
settings put global game_driver_all_apps 1
settings put global force_gpu_rendering 1
settings put global hwui_force_gpu_rendering 1

# Lock Refresh Rate to 90Hz or 60Hz (Root Only)
if [[ $(id -u) -eq 0 ]]; then
    echo -e "\033[1;32mApplying Refresh Rate Settings...\033[0m"
    settings put system peak_refresh_rate 90
    settings put system min_refresh_rate 60
fi

# Clean RAM (Root Only)
if [[ $(id -u) -eq 0 ]]; then
    echo -e "\033[1;32mClearing RAM Cache...\033[0m"
    echo 3 > /proc/sys/vm/drop_caches
else
    echo -e "\033[1;31mSkipping RAM Cache Clear (Root Required)\033[0m"
fi

# Finish
echo -e "\033[1;32m✔ Optimizations Applied Successfully!\033[0m"
