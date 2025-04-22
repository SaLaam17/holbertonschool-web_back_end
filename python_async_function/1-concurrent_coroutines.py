#!/usr/bin/env python3
"""
Module with "wait_n" coroutine
that spawns multiple "wait_random" coroutines
concurrently.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> list[float]:
    """
    Spawn wait_random n times with the given max_delay,
    and return the list of delays in the order they complete.
    """
    lst = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []
    for coroutine in asyncio.as_completed(lst):
        result = await coroutine
        results.append(result)
    return results
