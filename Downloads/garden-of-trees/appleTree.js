'gunakan yang ketat'

kelas  AppleTree  {
    // konstruktor
    konstruktor ( tree_name , tree_age , tree_height , treeMatrueAge , treeHealthStatus , treeLimitAge , treeStopAge )  {
        ini . _nama  =  nama_pohon ;
        ini . _umur  =  umur_pohon ;
        ini . _height  =  tinggi_pohon ;
        ini . _buah  =  [ ] ;
        ini . dipanen  =  '' ;
        ini . _healthStatus  =  pohonHealthStatus ;
        ini . _MatrueAge  =  pohonMatrueAge ; ;
        ini . _limitAge  =  treeLimitAge ;
        ini . _stopAge  =  treeStopAge ;
    }

    // pengambil
    dapatkan  nama ( )  {
        kembali  ini . _nama ;
    }

    dapatkan  umur ( )  {
        kembali  ini . _usia ; 
    }

    dapatkan  tinggi ( )  {
        ini . _tinggi ;
    }

    mendapatkan buah-  buahan ( )  {
        kembali  ini . _buah ;
    }

    dapatkan  status kesehatan ( )  {
        kembali  ini . _status kesehatan ;
    }

     panen ( )  { _
        kembali  ini . _dipanen ;
    }

    mendapatkan  usia dewasa ( )  {
        kembali  ini . _dewasaUsia ;
    }

    dapatkan  batas usia ( )  {
        kembali  ini . _batasUsia ;
    }

    // penyetel
    atur  usia ( nilai )  {
        ini . _umur  =  nilai ;
    }

    // tumbuh
    tumbuh ( )  {
        ini . _usia ++ ;
        /*
         * buatlah sebuah kondisi jika kalau umur pohon lebih besar atau sama dengan dari limit umur limit-nya maka pohon tidak sehat
         * jika umur pohon lebih kecil dari umur pohon berhenti tumbuh, maka pohon bertambah secara acak
         * tinggi pohon dibulatkan ke bulatan terbesar
        */
        
    }

    // menghasilkan beberapa buah
    menghasilkanBuah ( )  {
        /*
          * jika pohon ini sudah mencapai umur yang matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah
          * buat kelas buah di luar kelas pohon
          * hasil buah akan disimpan di dalam seperti buah
        */
    }
    
    // ambil buah
    panen ( )  {
        /*
         * menentukan jumlah seluruh buah
        */
    }
}