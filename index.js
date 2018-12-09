// this file shows various ways to create infinite loops in javascript

while (true);

for (;;);

// more exotic

const repeat = function* (x) {
	for (;;) yield x;
};

for (const x of repeat('git is cool'));

// cheating

const stuff_the_event_loop => () => setImmediate(stuff_the_event_loop);
