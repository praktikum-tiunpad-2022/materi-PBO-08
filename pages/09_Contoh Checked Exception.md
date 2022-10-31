---
clicks: 2
---

# Contoh **Checked** Exception

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>

```java {all|12|all}
import java.io.*;

class CheckedException {
    public static void main(String[] args){
        /*
        * File 'C:\\test\\a.txt' tidak ada. 
        * Maka program tidak akan bisa dijalankan.
        * Program akan mengeluarkan FileNotFoundException 
        * yang mana merupakan child dari IOException
        * IOException merupakan Checked exception
        */
        FileReader file = new FileReader("C:\\test\\a.txt");
        BufferedReader fileInput = new BufferedReader(file);

        for(int counter = 0; counter < 3; counter++){
            System.out.println(fileInput.readLine());
        }

        fileInput.close();
    }
}
```

</div>
<div class='flex-row' v-click=1>

```
./CheckedException.java:11: error: 
unreported exception FileNotFoundException; 
must be caught or declared to be thrown
    FileReader file = new FileReader("C:\\test\\a.txt");
                      ^
```

</div>
</div>