//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
            const inputNumber = parseFloat(document.getElementById("ip").value);
            const output = document.getElementById("output");
            
            if (isNaN(inputNumber)) {
                output.innerHTML = "Please enter a valid number";
                return;
            }
            
            output.innerHTML = "Processing...";
            
            new Promise(resolve => setTimeout(() => resolve(inputNumber), 2000))
                .then(result => {
                    output.innerHTML = `Result: ${result}`;
                    return new Promise(resolve => setTimeout(() => resolve(result * 2), 2000));
                })
                .then(result => {
                    output.innerHTML = `Result: ${result}`;
                    return new Promise(resolve => setTimeout(() => resolve(result - 3), 1000));
                })
                .then(result => {
                    output.innerHTML = `Result: ${result}`;
                    return new Promise(resolve => setTimeout(() => resolve(result / 2), 1000));
                })
                .then(result => {
                    output.innerHTML = `Result: ${result}`;
                    return new Promise(resolve => setTimeout(() => resolve(result + 10), 1000));
                })
                .then(finalResult => {
                    output.innerHTML = `Final Result: ${finalResult}`;
                });
        });
