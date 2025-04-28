#!/usr/bin/env python3
"""
Module for the coroutine async_generator
that generates 10 random numbers asynchronously,
yielding each number with a 1-second delay between each.
"""
import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loop 10 times,
    each time asynchronously wait 1 second,
    then yield a random number between 0 and 10.
    """
    for _ in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
