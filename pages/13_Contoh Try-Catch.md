# Contoh Try-Catch

```java
import java.io.*;

class CheckedExceptionHandling {
    public static void main(String[] args){
        try{
            FileReader file = new FileReader("C:\\test\\a.txt");
            BufferedReader fileInput = new BufferedReader(file);

            for(int counter = 0; counter < 3; counter++){
                System.out.println(fileInput.readLine());
            }

            fileInput.close();
        } catch(IOException e) {
            System.out.println("Terjadi suatu error : " + e.getMessage());
        }     
    }
}
```

<div>

```
Terjadi suatu error : C:\test\a.txt (No such file or directory)
```

</div>