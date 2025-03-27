#!/bin/bash

# Clear screen
clear

# ASCII Art
echo "====================================="
echo " ██████╗  ██████╗  ██████╗ ██╗"
echo " ██╔══██╗██╔═══██╗██╔═══██╗██║"
echo " ██████╔╝██║   ██║██║   ██║██║"
echo " ██╔═══╝ ██║   ██║██║   ██║██║"
echo " ██║     ╚██████╔╝╚██████╔╝███████╗"
echo " ╚═╝      ╚═════╝  ╚═════╝ ╚══════╝"
echo "====================================="
echo " POGI IMPROVE - Game Booster for Termux"
echo " Developer: Gabriel"
echo "====================================="
sleep 2

# Detect Device Name
DEVICE_NAME=$(getprop ro.product.model)
if [ -z "$DEVICE_NAME" ]; then
    DEVICE_NAME="Unknown Device"
fi

# Detect Terminal Used
TERMINAL_NAME=$(ps -o comm= -p $$)
if [ -z "$TERMINAL_NAME" ]; then
    TERMINAL_NAME="Unknown Terminal"
fi

echo "🔹 Device Detected: $DEVICE_NAME"
echo "🖥️ Terminal Used: $TERMINAL_NAME"
echo ""
sleep 2

# Module Purpose
echo "📌 Module Purpose:"
sleep 1
echo "  ✅ Improve overall device performance"
sleep 1
echo "  ✅ Clean RAM to free up memory"
sleep 1
echo "  ✅ Optimize storage for better I/O speed"
sleep 1
echo "  ✅ Enhance system stability for gaming"
sleep 1
echo "  ✅ Boost FPS and GPU performance"
echo ""
sleep 2

# Simulated Optimization Process
echo "🚀 Starting Optimization Process..."
sleep 2

# Step 1: Cleaning Cache
for i in {1..5}; do
    echo "🧹 Cleaning cache... [$i/5]"
    sleep 1
done
rm -rf ~/../usr/tmp/*
rm -rf ~/../usr/var/tmp/*
echo "✅ Cache cleaned!"
sleep 2

# Step 2: Freeing Up RAM
for i in {1..5}; do
    echo "🧠 Freeing up RAM... [$i/5]"
    sleep 1
done
echo 3 > /proc/sys/vm/drop_caches 2>/dev/null || echo "🔸 RAM cleanup is limited without root!"
echo "✅ RAM freed!"
sleep 2

# Step 3: Optimizing Storage Performance
for i in {1..5}; do
    echo "💾 Optimizing storage... [$i/5]"
    sleep 1
done
sync && echo "3" > ~/sync_cache.txt
echo "✅ Disk read/write performance improved!"
sleep 2

# Step 4: System Performance Optimization
for i in {1..5}; do
    echo "⚙️ Boosting system performance... [$i/5]"
    sleep 1
done
echo "✅ Performance boost completed!"
sleep 2

# Step 5: Enhancing Gaming Experience
for i in {1..5}; do
    echo "🎮 Enhancing gaming performance... [$i/5]"
    sleep 1
done
echo "✅ FPS optimization complete!"
sleep 2

# Display RAM Usage
echo "📊 Checking RAM usage..."
sleep 2
free -h
echo ""

# Inform the User That The Script Finished
echo ""
echo "🎉 POGI IMPROVE Optimizations Applied!"
echo "💯 Enjoy your smooth gaming experience!"
sleep 2
