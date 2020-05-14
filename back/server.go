/* package main

import (
	"fmt"
	"net/http"




	"./router"
)

func hello(w http.ResponseWriter, req *http.Request) {

	fmt.Fprintf(w, "hello friend\n")
}

func headers(w http.ResponseWriter, req *http.Request) {

	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

func main() {

	http.HandleFunc("/hello", hello)
	http.HandleFunc("/headers", headers)

	r := router.Router()
	fmt.Println("Starting server on the port 8090...")

	http.ListenAndServe(":8090", r)
}
*/
package main

import (
	"backtowork/router"
	"fmt"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("Starting server on the port 8090...")
	log.Fatal(http.ListenAndServe(":8090", r))
}
