```js
let ref
;<div>
  <CounterButton ref={r => (ref = r)} count={2}/>
  <Button size="small" onClick={() => ref.set(0)}>
    Reset
  </Button>
</div>
```
