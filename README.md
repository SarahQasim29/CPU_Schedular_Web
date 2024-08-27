**CPU SCHEDULING SIMULATOR**

**Project Overview**

This project integrates a sophisticated CPU Scheduling Simulator and Page Replacement Simulator, allowing users to model, analyze, and compare various scheduling and page replacement algorithms. The tool aims to provide a user-friendly environment for understanding CPU scheduling and memory management concepts, visualizing their processes, and enhancing overall system performance and efficiency.

**Objectives**

The goal of this project is to design and develop a simulator that models and analyzes various CPU scheduling and page replacement algorithms. Users can input processes, visualize both the CPU scheduling and page replacement processes, and compare different algorithms.

**Project Modules**

**CPU Scheduling Algorithms**

1. First-Come-First-Served (FCFS): Executes processes in the order they arrive. Non-preemptive.
2. Shortest Job First (SJF): Executes the process with the smallest execution time next. Can be preemptive (Shortest Remaining Time First, SRTF) or non-preemptive.
3. Priority Scheduling (PS): Allocates CPU to the process with the highest priority (lowest numerical value). Can be preemptive or non-preemptive.
4. Round Robin (RR): Assigns a fixed time unit per process (quantum). Processes are executed cyclically.
5. Multilevel Feedback Queue (MFQ): Uses multiple queues with different priority levels. Processes can move between queues based on their execution history.

**Page Replacement Algorithms**

1. First-Come-First-Served (FCFS): Replaces the oldest page in memory.
2. Shortest Job First (SJF): Replaces the page with the shortest remaining time to the next use.
3. Least Recently Used (LRU): Replaces the page that has not been used for the longest time.
4. Optimal: Replaces the page that will not be used for the longest period in the future.
5. Second Chance: Enhances FCFS by giving pages a second chance based on a reference bit.

**Functionalities**

It includes:
1. Process Creation: Users can create processes with attributes such as Process ID, Arrival Time, Burst Time, and Priority.
2. Simulation Run: Users can run the simulation with any selected algorithm and processes.
3. Performance Metrics Calculation: The simulator calculates and displays the Average Turnaround Time, Average Waiting Time, Average Response Time, CPU Utilization and Performance comparison of implemented algorithms
4. Visualization: Provides a graphical representation of the scheduling process.

**Interfaces**

![image](https://github.com/user-attachments/assets/2ae4ff23-33cc-4897-aab3-ec28e5064b49)
![image](https://github.com/user-attachments/assets/ecaa7cec-46e0-444a-ad1b-0aeb2ee17df7)
![image](https://github.com/user-attachments/assets/26c4ee0a-1690-4977-9cb9-051fd658e289)
![image](https://github.com/user-attachments/assets/f3b5bdde-e361-4a65-9514-d5cb0cc152d2)
![image](https://github.com/user-attachments/assets/935b1480-f41f-4742-a708-148d4ba6bbac)
![image](https://github.com/user-attachments/assets/2814849d-6108-4e39-af80-a1001d602b81)
![image](https://github.com/user-attachments/assets/44e6b56d-60a6-4774-9a8a-c6fb632b58ae)
![image](https://github.com/user-attachments/assets/8f2f506e-15f2-4dc5-93f8-bb5498642161)

**Conclusion**
This simulator provides an interactive and educational tool for understanding CPU scheduling and page replacement algorithms. By offering visualization and performance analysis, it enhances users' ability to grasp these fundamental concepts and their impact on system efficiency.






