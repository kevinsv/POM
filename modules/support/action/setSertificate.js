module.exports = (done) => {

    var certificate = "MIIDSzCCAjOgAwIBAgIUH88wvjC/4WRRL57mI6tAK0wQ6eAwDQYJKoZIhvcNAQELBQAwIzEhMB8GA1UEAwwYMzZjMjI1NmJmNzQ0LmxvY2FsZG9tYWluMB4XDTE3MDIy" +
                      "NzEyMzA1OFoXDTM3MDIyNzEyMzA1OFowIzEhMB8GA1UEAwwYMzZjMjI1NmJmNzQ0" +
                      "LmxvY2FsZG9tYWluMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj4jP" +
                      "42ni9qY62PMy1Jed0o/l8r9jkO+7Rf3Mpjnpx1uKD0RIuBnEoQDGlhjBnwsm44+K" +
                      "HL+vhrYgkMUfbm2EqKM/ERaDMFZYSYKMx01aoL4PNu663+DUgVwzfg96QN46aaoE" +
                      "ibPDNYadauUmLq1QigODjny3kSDX244awmv3ohFnBfqu3wN3ogihoWuE8axthNsm" +
                      "Cz3L1xM+pPxtyZO9hG26J7nY/juGs4tKLctaHYb2vE/xFZSpUnS7E+UY8u/QKuzO" +
                      "Iz6qBE9I5Tkeh2u9r6x5NT5Zyypj4Q7OKbdGshhCashLWatNkCO7MqB2WHFD3nt/" +
                      "4gYLcGmNbloAZDAsawIDAQABo3cwdTAdBgNVHQ4EFgQUNfbp/RaGcotMX+bhgZFc" +
                      "FYnTtyAwVAYDVR0RBE0wS4IYMzZjMjI1NmJmNzQ0LmxvY2FsZG9tYWluhi9odHRw" +
                      "czovLzM2YzIyNTZiZjc0NC5sb2NhbGRvbWFpbi9pZHAvc2hpYmJvbGV0aDANBgkq" +
                      "hkiG9w0BAQsFAAOCAQEAMgPSc6JjosHJpKiXxfZk3EPUFxDkWVRTKjlPL7uJYTja" +
                      "JrRe8RqJ3AmrygC1/x70mv1qii75bk26UuZHkj7B+VyU3AlrPArYL0uouReoDKbR" +
                      "HbZtGXFZx+/jOx7CpHm+/vscRggAiuEDRpGDwjafPlMU23/OQ4ES4flgSk9Eloqb" +
                      "7yCufhyjlIt0C7U5FDPQlk4KB+EY4zxeYzMiesg58FdHGu/wdyYQaeP1Paj4dcv7" +
                      "Au1UUNmZRY2foa8HzMAZX2Lq+rYS21pQP4otAe3GWXhEOaoVMoaagQeyN2I0DH9+" +
                      "FJqyKRXrZljppSwtUUyBU6RlE+lHjWG2o+EVi6CMGQ==";

    var certificate2 = "just test certificate";

    browser.setValue(".//*[contains(@id,'IdentityProviderCertificate')]", certificate2);
    browser.pause(1000);
    done();
};




