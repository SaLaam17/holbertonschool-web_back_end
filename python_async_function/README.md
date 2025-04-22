# Python Asynchronous Programming and Random Module

## 1. `async` and `await` Syntax
Python's `async` and `await` keywords are used for writing asynchronous code using coroutines.

### Coroutine:
A coroutine is a special function that can pause execution and resume later. It's defined using `async def`:

```python
async def my_coroutine():
    await asyncio.sleep(1)
    print("Done sleeping")
```

- `async def` defines a coroutine.
- `await` is used to pause the coroutine until the awaited task is done.

---

## 2. Executing an Async Program with `asyncio`
To run an asynchronous function, you use `asyncio.run()`:

```python
import asyncio

async def main():
    print("Start")
    await asyncio.sleep(1)
    print("End")

asyncio.run(main())
```

This creates an event loop, runs `main()`, and then closes the loop.

---

## 3. Running Concurrent Coroutines
You can run coroutines concurrently using `asyncio.gather()`:

```python
import asyncio

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    await asyncio.gather(
        say_after(1, "Hello"),
        say_after(2, "World")
    )

asyncio.run(main())
```

Both coroutines are started at the same time and run concurrently.

---

## 4. Creating `asyncio` Tasks
To create a task, use `asyncio.create_task()`:

```python
import asyncio

async def countdown(n):
    while n > 0:
        print(f"Countdown: {n}")
        await asyncio.sleep(1)
        n -= 1

async def main():
    task = asyncio.create_task(countdown(5))
    print("Task created")
    await task
    print("Task completed")

asyncio.run(main())
```

`create_task` schedules the coroutine to run in the background.

---

## 5. Using the `random` Module
The `random` module provides functions to generate random numbers.

### Examples:
```python
import random

print(random.random())        # Random float: 0.0 <= x < 1.0
print(random.randint(1, 10))  # Random integer between 1 and 10
print(random.choice(['a', 'b', 'c']))  # Random element from a list
```

You can also shuffle lists:
```python
items = [1, 2, 3, 4]
random.shuffle(items)
print(items)
```

---

These features are often combined in asynchronous programs for simulating delays, randomness in tasks, etc.


🎮 1. Jeu Asynchrone : Réaction Rapide
Un mini-jeu où tu dois appuyer sur Entrée dès que "Go!" s'affiche à l'écran, après un délai aléatoire. Le temps de réaction est mesuré.

```
import asyncio
import random
import time

async def wait_for_go():
    delay = random.uniform(1, 5)
    print("Prépare-toi... (ne presse rien)")
    await asyncio.sleep(delay)
    print("Go!")

async def main():
    await wait_for_go()
    start = time.perf_counter()
    input()  # L'utilisateur doit appuyer sur Entrée
    end = time.perf_counter()
    reaction_time = end - start
    print(f"Ton temps de réaction est de {reaction_time:.3f} secondes.")

asyncio.run(main())
```

📥 2. Simulateur de Téléchargement Asynchrone
Ce script simule plusieurs téléchargements en parallèle avec des durées aléatoires.

```
import asyncio
import random

async def download_file(file_id: int):
    delay = random.uniform(1, 5)
    print(f"[Fichier {file_id}] Téléchargement commencé (durée estimée : {delay:.2f}s)...")
    await asyncio.sleep(delay)
    print(f"[Fichier {file_id}] Téléchargement terminé!")

async def main():
    tasks = [asyncio.create_task(download_file(i)) for i in range(1, 6)]
    await asyncio.gather(*tasks)
    print("Tous les téléchargements sont terminés.")

asyncio.run(main())
```
