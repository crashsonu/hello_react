#include<stdio.h>

int sum(x, y) {
    return x + y;
}

float divFunc(x, y) {
    float result;
    result = (float) x / y;
    return result;
}


int learnForLoop() {
    int myArray[] = {10, 20, 30, 40, 50, 60};
    for (int i = 0; i <= 5; i++) {
        printf("%d\n", myArray[i]);
    }
    return 0;
}

void main() {
    learnForLoop();
}


//int main() {
//    int a, b, add;
//    printf("Enter the first value");
//    scanf("%d", &a);
//    printf("enter the second value");
//    scanf("%d", &b);
//    add = sum(a, b);
//    printf(" addition = %d\n", add);
//    float div1 = divFunc(a, b);
//    printf(" division = %f", div1);
//    return 0;
//}
