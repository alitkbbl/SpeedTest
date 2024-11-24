#include <stdio.h>


int func(int n) {
    
    if (n == 0) return 1;
    if (n == 1) return 0;
    if (n == 2) return 3;
    int result=func(n - 2) * 3 ;
    for(int j=4;j<=n;j+=2){
        result+= 2*func(n-j);
    }
    return result;
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d",2*func(n));
    return 0;
}
