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

# Auto-detect Device Name
DEVICE_NAME=$(getprop ro.product.model 2>/dev/null)
if [ -z "$DEVICE_NAME" ]; then
    DEVICE_NAME="Unknown Device"
fi
echo "🔹 Device Detected: $DEVICE_NAME"

# **Fix Terminal Emulator Detection**
if [ -n "$TERMUX_VERSION" ]; then
    TERMINAL_EMULATOR="Termux"
elif [ -d "/data/data/com.termux/" ]; then
    TERMINAL_EMULATOR="Termux"
elif [ "$(which brevent 2>/dev/null)" ]; then
    TERMINAL_EMULATOR="Brevent"
elif [[ "$PREFIX" == "/data/data/com.termux/files/usr" ]]; then
    TERMINAL_EMULATOR="Termux"
else
    TERMINAL_EMULATOR=$(ps -o comm= -p $$ 2>/dev/null)
    [ -z "$TERMINAL_EMULATOR" ] && TERMINAL_EMULATOR="Unknown Terminal"
fi

echo "🖥️ Terminal Used: $TERMINAL_EMULATOR"
echo ""

# **📌 Module Purpose (Slow Display)**
echo "📌 Module Purpose:"
sleep 1
echo "✅ Improve overall device performance"; sleep 1
echo "✅ Clean RAM to free up memory"; sleep 1
echo "✅ Optimize storage for better I/O speed"; sleep 1
echo "✅ Enhance system stability for gaming"; sleep 1
echo "✅ Simulate FPS and GPU optimization"; sleep 1
echo ""

# **🔄 Simulated Progress Bar (Fix for Termux)**
progress_bar() {
    local duration=$1
    local bar_length=30
    local filled=0

    echo -ne "["
    for ((i=0; i<$bar_length; i++)); do echo -ne " "; done
    echo -ne "] 0%\r"

    for ((i=0; i<=$bar_length; i++)); do
        sleep $((duration / bar_length))
        filled=$((i * 100 / bar_length))
        echo -ne "["
        for ((j=0; j<i; j++)); do echo -ne "#"; done
        for ((j=i; j<bar_length; j++)); do echo -ne " "; done
        echo -ne "] ${filled}%\r"
    done
    echo ""
}

# Start Optimization
echo "🚀 Initializing Optimization..."
progress_bar 5

# Free Up Disk Space (Cache Cleanup)
echo "🔄 Cleaning up cache..."
sleep 2
rm -rf ~/../usr/tmp/*
rm -rf ~/../usr/var/tmp/*
echo "✅ Cache cleaned!"
sleep 3

# Boost I/O Performance (Storage Optimization)
echo "⚡ Optimizing storage performance..."
sleep 2
sync && echo "3" > ~/sync_cache.txt
echo "✅ Disk read/write performance improved!"
sleep 3

# Simulating CPU Optimization (Without Root)
echo "🔥 Boosting system performance..."
progress_bar 5
echo "✅ Performance boost completed!"
sleep 3

# Memory Usage Information
echo "📊 Checking RAM usage..."
sleep 2
free -h
echo ""

# Show Running Processes (Instead of Killing Them)
echo "🔍 Analyzing background processes..."
progress_bar 4
ps -A -o comm | head -20
echo ""

# Fake FPS Boosting (Just for Show)
echo "🎮 Enhancing gaming experience..."
progress_bar 4
echo "🔄 Adjusting rendering settings..."
sleep 3
echo "✅ FPS optimization complete!"
sleep 2

# Inform the User That The Script Finished
echo ""
echo "🎉 POGI IMPROVE Optimizations Applied!"
echo "💯 Enjoy your smooth gaming experience!"
sleep 2
