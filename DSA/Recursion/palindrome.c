#include <stdio.h>
#include <string.h>

int isPalindrome(char num[]) {
    int len = strlen(num);
    int start = 0, end = len - 1;

    // Compare characters from both ends
    while (start < end) {
        if (num[start] != num[end]) {
            return 0; // Not a palindrome
        }
        start++;
        end--;
    }

    return 1; // Is a palindrome
}

int main() {
    int n, i;

    // Input the number of numbers to check
    printf("Enter the number of numbers you want to check: ");
    scanf("%d", &n);

    char numbers[n][100]; // Array to store large numbers as strings

    // Input all numbers
    printf("Enter %d numbers:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%s", numbers[i]);
    }

    // Check each number and print results
    printf("\nResults:\n");
    for (i = 0; i < n; i++) {
        if (isPalindrome(numbers[i])) {
            printf("%s is a palindrome.\n", numbers[i]);
        } else {
            printf("%s is not a palindrome.\n", numbers[i]);
        }
    }

    return 0;
}
