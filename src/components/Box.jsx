import { useRef, useEffect } from "react"

const Box = () => {
  const boxRef = useRef()

  useEffect(() => {
    // 監視の設定
    const observer = new IntersectionObserver(callback)
    function callback(entries) {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('translate-y-0', 'opacity-1')
        entries[0].target.classList.remove('translate-y-20', 'opacity-0')
        observer.unobserve(entries[0].target)
      }
    }

    // 監視開始
    observer.observe(boxRef.current)

    // クリーンアップ関数
    // 実行時はboxRef.currentの値がundefinedのため、observer.unobserve(boxRef.current)は不可
    // なぜ？ -> アンマウント時にクリーンアップ関数が実行されるよりboxRefが先に破棄されるから？
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={boxRef} className="w-[600px] h-[400px] my-6 bg-stone-400 translate-y-20 opacity-0 transition-all duration-1000 ease-out"></div>
  )
}

export default Box