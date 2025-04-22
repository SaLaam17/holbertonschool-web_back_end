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
    Spawn wait_random n times with the given max_delay.
    """
    lst = [wait_random(max_delay) for i in range(n)]
    results = await asyncio.gather(*lst)
    return sorted(results)
