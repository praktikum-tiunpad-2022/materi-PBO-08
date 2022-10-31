# Exception & Error Class
Berikut adalah contoh perbedaan lebih lanjut dari Error dan Exception:

<div class="grid grid-cols-2 gap-y-10 gap-x-6 mt-8">
<div class='flex-row'>
<div class='text-xl'>
<span class='text-red'>VirtualMachineError</span> mengindikasikan <strong>VM Java</strong> yang <strong>rusak</strong> dan <strong>kekurangan sumber daya</strong> untuk beroperasi. Error seperti ini sebaiknya <strong>tidak ditangani</strong> atau <strong>di-handle</strong>.
</div>
<br>
<div class='text-xl'>
<span class='text-blue'>ArithmeticException</span> mengindikasikan adanya <strong>kondisi aritmatika</strong> yang <strong>diluar penalaran</strong>. <strong>Exception</strong> seperti ini sebaiknya <strong>ditangani</strong> atau <strong>di-handle</strong> sehingga program dapat terus beroperasi.
</div>
</div>
<div class='flex-row'>
<img src="/img/diagram throwable.png">
</div>
</div>