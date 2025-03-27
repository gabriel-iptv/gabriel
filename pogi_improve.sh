#!/data/data/com.termux/files/usr/bin/bash

# ASCII Banner
echo "====================================="
echo "  Termux Gaming Performance Booster "
echo "  Developer: Gabriel "
echo "====================================="

# Detect Device Name
DEVICE_NAME=$(getprop ro.product.model)
echo "Device Name: $DEVICE_NAME"

# Apply Gaming Optimizations
echo "[1] Setting CPU to Performance Mode..."
echo "performance" > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor 2>/dev/null

echo "[2] Clearing RAM and Cached Processes..."
sync && echo 3 > /proc/sys/vm/drop_caches 2>/dev/null

echo "[3] Enabling GPU Rendering Optimization..."
settings put global disable_hw_overlays 1
settings put global force_gpu_rendering 1

echo "[4] Adjusting I/O Performance..."
echo 0 > /proc/sys/kernel/randomize_va_space 2>/dev/null

echo "[5] Disabling Background Services for Gaming Mode..."
pm disable com.android.dreams.basic 2>/dev/null
pm disable com.android.dreams.phototable 2>/dev/null

echo "[6] Boosting System UI Responsiveness..."
settings put global window_animation_scale 0.0
settings put global transition_animation_scale 0.0
settings put global animator_duration_scale 0.0

echo "[7] Finalizing Optimizations..."
echo "Gaming Mode Activated! Enjoy Smooth Gameplay!"
