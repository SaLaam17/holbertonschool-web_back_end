#!/usr/bin/env python3
"""
Module
"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that will execute async_comprehension
    four times in parallel using asyncio.gather
    """
    start = time.time()
    await asyncio.gather(async_comprehension(),
                         async_comprehension(),
                         async_comprehension(),
                         async_comprehension())
    stop = time.time()
    return stop - start
