# Contoh Custom Exception Class

<div class="grid grid-cols-12 gap-y-10 gap-x-4">
<div class='flex-row col-span-4'>

Membuat **custom exception class** dapat dilakukan dengan membuat class seperti biasa lalu **mewarisi class Exception** dengan menggunakan **extends**. 

Tujuannya adalah apabila ada kondisi abnormal lainnya yang ingin dibuat.

<div class="mt-12" v-click=3>

```
Terjadi error : 
Angka yang dimasukkan melanggar ketentuan
```

</div>

</div>

<div class='flex-row col-span-8'>

```java {all|1-5|12|all}
class InvalidNumberException extends Exception {
    public InvalidNumberException(){
        super("Angka yang dimasukkan melanggar ketentuan");
    }
}

public class CustomException {
    public static boolean cekAngka(int angka) throws InvalidNumberException{
        if(angka < 0 || angka > 20)
            return true;
        else 
            throw new InvalidNumberException();
    }

    public static void main(String[] args){
        try{
            cekAngka(20);
        } catch (Exception e) {
            System.out.println("Terjadi error : \n" + e.getMessage());
        }
    }
}
```
</div>

</div>