---
clicks: 2
---

# Contoh **Unchecked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

```java {all|13|all}
import java.util.Scanner;

class UnheckedException {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        int x = 0;
        int y = 10;

        System.out.println("ENTER untuk lanjutkan");
        input.nextLine();

        int z = y / x;
        // ArithmeticException. 
        // Suatu bilangan tidak boleh dibagi dengan 0

        System.out.println("Hasil z = " + z);
    }
}
```

</div>
<div class='flex-row' v-click=1>

```
ENTER untuk lanjutkan

Exception in thread "main" 
java.lang.ArithmeticException: / by zero
    at UnheckedException.main(Main.java:13)
```

</div>
</div>