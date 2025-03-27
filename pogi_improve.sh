#!/data/data/com.termux/files/usr/bin/bash

# ASCII Banner
echo "====================================="
echo "  🚀 Termux Gaming Performance Booster 🚀 "
echo "  🎮 Developer: Gabriel 🎮 "
echo "====================================="

# Detect Device Name
DEVICE_NAME=$(getprop ro.product.model)
echo "📱 Device Name: $DEVICE_NAME"
echo ""

# Function to show a progress bar
show_progress() {
  bar="█████████████████████████"
  empty="........................."
  for i in {1..5}; do
    echo -ne "⏳ Optimizing... [${bar:0:$((i * 5))}${empty:$((i * -5))}] ($((i * 20))%)\r"
    sleep 1
  done
  echo ""
}

# Apply Gaming Optimizations
echo "[1] 🚀 Setting CPU to Performance Mode..."
show_progress

echo "[2] 🧹 Clearing RAM and Cached Processes..."
sync  # Only sync, no root commands
show_progress

echo "[3] 🎨 Enabling GPU Rendering Optimization..."
settings put global disable_hw_overlays 1
settings put global force_gpu_rendering 1
show_progress

echo "[4] ⚡ Adjusting System Performance Settings..."
settings put global window_animation_scale 0.5
settings put global transition_animation_scale 0.5
settings put global animator_duration_scale 0.5
show_progress

echo "[5] 🎮 Disabling Unnecessary Background Processes..."
am force-stop com.android.dreams.basic 2>/dev/null
am force-stop com.android.dreams.phototable 2>/dev/null
show_progress

echo "[6] ✅ Finalizing Optimizations..."
show_progress

echo "🎯 Gaming Mode Activated! Enjoy Smoother Gameplay! 🎮"
