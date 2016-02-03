# webppl-node-progress-bar

## Installation

    mkdir -p ~/.webppl
    npm install --prefix ~/.webppl https://github.com/null-a/webppl-node-progress-bar

## Example usage

    MCMC(model, { samples: 1e5, callbacks: [webpplNodeProgressBar.makeCallback()] });

Run the program with:

    webppl program.wppl --require webppl-node-progress-bar
