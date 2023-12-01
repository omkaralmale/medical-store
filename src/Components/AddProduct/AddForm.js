import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddForm() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Card style={{ width: "1500px" }}>
        <Card.Img
          variant="top"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABLCAMAAACbZQnyAAAB0VBMVEX///8AAAADAAAhGRUAmkUAjNf859MAcb7vcACpp6a1s7IAPJYAidYAbLsAiNb74MwARp0AdsUAS6F1dXUAW60AQpoAZbUAe8nv7u4AVagAYrTDwsEAmD8AkNsAgs9OSUYAlDX97uMQAAAAmuQUBgAANZMzLCro5+eFgoEAgtT1eQBoZWTh8efe3d0OLo72/PmenJsXJouLiIdXU1H//wAAkSxCPDrv+P2urKu+vbzN59az3MKl1vUVp+tua2ksJSGLwenS0dEAAIO32PGe0K+93sjF5fl7xPFmsOPZ6/ip2LtUUE5HQkCDw5lftn5tu4lSt+5Frm0wmdtRp+AfoVOFyfK03PcAlesLHYlLUZs4qWSqxeFyfGsyToWukXT72bzN3e7uZABcm9NGerqMqM+ev6s6kdLL188AYsOIqX5wjMCVs23z7BLd3y5MhZZQmq7Ay1Jyjns+Y6kAcM9eg4ijr2A5j7uYqWLAyN9bn58ARq9ytJ5IoLxWcITL2lCHkWlseLG4vEkVS5K0t9RZicNRr7qqz3ZVXXeysE2NkL1pbqvfzsKsmImSe2mkzIGPw47c5TNEVH6Uc1F6WDOKaETyjyXLyTuQn2wle7JljIgtgrUzsZ3UAAAb9klEQVR4nO2di38a15XH74BYFwkRS/IDGZAIQjw6g0DIMBJgGMKAAGlAAmR7ZadVG8dtEidNm9abd9qum2a33Wb7zvav3XPunRdIMIMkf5wHP9kIhqsrGL5zzrnnnntFyFRTTTXVVFNNNdVUU0011VRTTTXVVFNNNdVUU0011TdJQr7QkuVWTUi96Fcy1YSK+dNxfosvZdwV34t+LYNKFdptpVXLC0K+JncOlfyLfkFT2VYlHuFQEfYtmk6+6FekK99u19Bi1QqtVqGWT5FU61ARXvSrmsqO3GWAycnFt9OO3I57aRXZWvVftNe0M8xf2PblD2WSqrUKmgtEl5gnQqczdYlfe7nBSjnTlZwb3CG3Sg/5lwCtXOVC3fo5pzO8f7GXlmrLRJBrCJEJUaHQos9MZUis1+/erTfFS+qteVJ9/+TkQr0lc4CQf8u9ug0PKipYBO0Nx5Uu0G8FuLooWbXDVErOI1TJJICVAn9Yq+XBG5JCAZ+8SN9WevlHLz3P7i9T9aODg92jImj34OCgeEG4mg9+fPMWanl5cfm1Ryfn7Gabc3A78NFxPDxIOiII1vY2fSrDceVzh1rAlSPi5JzhVeu2o6QopFDDO75KrPI6Ru+IEuIFsVZLSB0+zyj+5e99M8ASd+8cNcHEVCVSFQl83T24c/f83T14vDC/cOXKlfkrN27cunVtefH68qPzkArwlDJgmMqzfBwc4Q61WGHOTZ+MRTnunJFWMuzkMtQdnp+sjkzkFFKVJD9h7tCkVK1dIO3aefu21jcDLPHgAKgipLrbbZKgKCa6DTh6dF60ijcXbt68uQBk/fSNK2C0rl0Ds3V9482J0YJQChiKL+XAaJVKzhiNsZIQX1Uw3kqSEsfNnucFxhxO5kcvQFYbwnT8nkzGWoOmKZWXO/1Q/7hFOs+PrG8EWEeAVbMnecFQdQnxknoPHGMXn7jTnLy3+uPEyuOFBQTrxltP3n7nGoK1eBXQWn80WU9x1SJxewR54uE/ULDDVaJOCLI4LoYW7Rw2yxdxOnh2F8namrwH8IO1lAJWKlZJvj5AjyAfhkKhQKAdkgsy0Heevu3oGwCWSA2T6CU9AMuDd6Rer96rkoYEpuxo0u6kxIon8bO33noPLdat2+/+FC3W4hs///n1xasbv5jEaLk5bj+NGPjjPBioWIanFisThQcZshVxlCl7E8dZvnIkvKc9ALIc5yCroBCZFIi/UpFNOauUfAxQzczMhJR+SM4LMjm2F8EnZ9PptH8w+eGHQ9uDb67iTqfdbDD83MDyXVb+uX5HJNWuSBq9bp2QBBGDJNhEwqq9ag+t2WTd9bwujyfx1u13Eaz5d955g7rCxV/e/hWAdX1u88R2T+Dytsle2ucAmxTnnTEwUlEM3nkeYy8f505ycXiEeE2kAa7OSZZwCFyRmi9WMWUVhE6WUgVcyf1ACMBL1VKHNnrbKXNcOOyAeFL/TH0QBTjCYY5zGr4+Qw85OAdcbXbB8qWXRqgUow229QNx+jjOu7fSdnq20l0Ap5kgRfB/IpAFrk8kAJgkEVeP+sH6nQl6E7se4Mqz8vTtd3+GFmv+xq0bNMb61ZP/ePXq1etA1vt2+4o68K3yGE+BiULX5eMQLCdE3cSBx9NoraJcfKI3THKRyECSAcmaNHFxmCqAKaq87i/oh4R2NtA/pmCFCoeBmYBCaqQmsEBsrJZo5oNmPzg1NxdzhrVj3BI75Cs79EN7dsFKcqOVUd+9Lvzds+l43L10sQwhFXIF1mqtCrbGfFwkPRgf0oOTkNV1BSlYiQ/AYCFY8/MMrA9/vnh1EcGau2+TLIih0A9G99LIVQy8oY+bBVfoo2PCDEZYJMJj4mAyZ7gfjkQHj+xw+qdnUzVZgMDKl/yJzlWqg8aq36F+sNaGbwAW+EqZWKaz0jpXIAezWdEIxYzDb+oYmB7SAORtghXlHKPEqZbeoTWh54AnW+lMLDPR2ThLdeCqKxHiajaq5uMQCom9IrhFqcca2dOdoNfrRbBWFtioUAdreREEYK2vr98/sdOVD8LyrbQPLqOtTAwhipfKSYyxKjRc93FhuJ1FpuLcnlVnJu0BV8NBxOykZFFHmEwmZS02LzAf2JfhWyivhKg7RLBSBUEZ35ePcRVh3ISp7aSsRdKVnRwFDA+5B5pxfltgxbjRYDlU65jRweLgUdzHJ0sV9yQn4yyJYIwkJOokSNMNYr2422hIVTYWrIvBImmcEFK0GcHvBj0ffawkEKybw2AhWVfnPvnk4cbGup2+Mhinb1FjxCNX8AFs0VFhmj4iW068dS5RBO2b7q1wpIxcJdXBZIz+KJI1wVVaKOQFkoz5WkS1WJ0sDa1mArUQcCWHZlSwBIG0rEyW28GmAErMJHH46qJou6gdRrJoSoUiBqaKpz4yUroEsNi1lNSb4O+Jrc6SdM7+qRghzCYUG4Q0WDTV8ybA4IDRSaAVE4kET3lwHHdgK+tQ96x5Pr796Riw1h/e/mxzffPXNjpDWmLlVfSDZT6D+FTiJbRYWw76/D69jtN4lWU43u4b5h3OMLVXFdV/OhlPYA84+yHrIcHAqfITgVCyUv0Q42omJISy+RqjLIRtaiRVy4+PspaQGPTpZJ86Pj8zYmEWOYKbdkaWaIZEfZLNRUXtucLyOLA41kZ3lxyOYZL8/tKFh4XMEnV74O9E0uwmPC5d3oQET0ldL/OQtsKsteDavS8//fQj7yiwrr/6myf/2FzfeMU6zNqByAlToKtp9IN8HH0iie9D8O6kFPkc1HAlWaqUs3kqSpwzwgZDZJV+cBX15KLzsU2WoKTyxBejdIHpEgKBGQ2smpzPZ7X7hHIHJmtsbzwi48BZqlkuEomg2UB2cCKLvkEAa1VzmPR9roaxmT2w0pyJI036kZ2hNnZPo6VUXOpV4Kpoxoqi1UXfqOadikXr3o6Ca2vBe8EPdIt15bQr/O1nm3Pr6xtzlp3xXDwXRQa2KEAl5u1yCJaaMmdHImnaZtvW+41zzrAW6PspUrw+okSybIYWslDAdM/r1MUVBBpeBTrsFjDTrRdBiwXoja/OohbLiZF0ZXVra2t1h3pmp5r4jSFY8KSPesAw2tfMHjTbswdWzICmHFXlGLBQZn9p9wRY6UifsRHJbsI1LI/LlM20NlniGigYdLHg/ebC/MJjE1jX525cg+D96jpwBSbrP616i4R3opi6Yt7QF91CApb2wqtklbpCtxp77iFmbnu+MAPsGANI5zaeU+MaBepszg+10VYl/czDqVwdsvFgKzWjg4Xc1VKWvjBNY6zI3tAhDawIsgB3cixo162qzTzWvg6N/pNuI1pn7z6nH4iO7Gci6bBANHWaKyDLY5B119JkocECsFi64eZNCX728TwDa3nxzRNCHl2n6QYEa9Mqfk+iz0pyMfSD+2niqJDSEvzDGMvPbcH52HYwRkqrtLXDxttFrkxR/jbYgYwZSCRrx0Y/qQ4YogqNsEAscxXoIFiBNulTzOgxfBZLaFqkM647dVQYNo1V02EdLOMYa6Yn7WyCta1D4zR+4RBs24ZZu5TCXBMr1QSG7MgSBO8MKrzj6RqtLU3WHcBKA2sBov7qjzWLtfxak5w8em15UQVrc2PTKsra5spgrpJR1RsiD/FynM0VZjiO56NqMmqVTiE7uZjl20VfN/BhQa+DJ3JpuMXZEmQY7FUqr9MHCovbAwqAFegToXMcCPTbbQoZYWAVSHtsfxk1kRDWqc+cARbRkqPqLIHdzLtBkd49rx/KDbeZMNd8tg4Me+T19BoNKehKNIqNXhe4gjvFXsLllfQmuxYDwzpE7r+7x8BakEj15rwWY117Rpq/uH6V5bEArPtL9zfv/3p8bxl6McWcTryMczl8sFReYmCRCs9xuVUu7kOzTk/FqnXCYfuUPcqUdobK/EqDNm2EaliEFUvSTIMWqQc6SmAmK7Q6NUHIFzpqtoGBVSMWdcr7aupTD3HOBKui5lHDZXoR2Z0rNCjSZxf8hi9kF9aWfsCO5beSaKQ9JS8lCIeAdXCLXpenSap1UvW6vDp8dYtc1tG9333+5KOnmHmHAWVjXh8V3nqNvH9VDd4RrLmHb//m9/c3xvfGYzgOrjAJYUDYD2NDDLOXSjGjghSaoFjygLeM3mdP+zkfFx3+8HiHDbJaGDNVKjQ3eqxGVIHDQijUymcDIRQezFJPiWVaEL1bJN9z6vyNZjDiKli+HT8TPerXMvT0JdoFyz+Q/2Ry6sdYsmXH8IUXXklgJkUE75eok4a3S4rvJarNBAAmJRJVDTjWyCL9fmft3ue3P6cWq0ukBSPdcE08uXrNBNbmZ7e/eGXzlfEGcAveYRKD90qOlrbzOTYeMhdPJdNLcZWVuFWqAGdtTrGXPp1tB7IcVnGGLLRIjIVYNS2BBaF6tp3S0w5aiIWjQiLkLRft7KnMqFZFA0uf6WOtKmHNtO1MUN1g+Lk9nqlUHrZQRhvbGcHROqpr98AyubwMLFJteHoeFyHAR4+ICVdQb28RZN1bW/uop4AvdCWaTeRKBevWI3JreRCspc/ub1qMC/dgMBQp56JRGAzlcFwUwVvMPkd15fb393PsbtkxHiy/7SzVXtjpsIjXFKFAkhV0cuTQyGAVCqljE1gBNpGD/lLIy5arweIDZBlgqTZKbeWLaqbNbx+sJcMcncpkaRaqdIZZO7e0EEskQBIFy+OlZqSYwGo/lwtuE0CJ1n58kNWkQ0KMscBg9W4aCdJb4oPla2awYEx4f3Pz/n+NfXFbkQjHzoR6PhzaCTlzoj4yHqyKmavZTCbjNrGTodKHZKuWZNE0FrNFIXSCbFjYJ52QgVUgy2YRmcWyBoumrvR8QmYEWOjz1WYx22BVxiTftcDLaGMzIzhOhmsLulSLFexKaMZ6FCwPBcurz00bFu4s1dfWWB4r6JXEhJF5v/GMXLk2CNb6xgaA9d9jXxwETb4JVBqb2ksOzATyfDq9ZMRbPi4NMsBCm+UcSxa6QmaLZAoWJStbk7O6werLh8e0qSDQG6sYC1VxqtPLMTNYrL7BAEvLOkS27Bf6OcaQpVkowxdecEEcMYOFOSwaYzXERMJbJI0EBPIeb4M0zePC4tgC+KIOVuKkagbrkUgdoVbdoIP172NfnB40+ZIxvAHpH3bydBC0NS7oxIUTpmE0j9ekXzf5vlPGfxVCmXFkFWoIFf5nxopWNHSI0GoHsCYZWTtus9lpWrScT9laveorR7TkupbH8lUqFTrjY2qmmjbuD9+3C1Z6rMliOeG44QutEzcW0sESESzwgjAaJM0ggAVGh1QTcAR8pLehNRufIjWBJT4wgXXrgfga00RgubUylm3M2+wwh0fNdtLJcVifwAaFquWJjsnsxcKDNTE8NW5RzWSdBotEI5HImFkzQc6rs8+sigEi+MAxmZlRavl8Qe4cA2WKOj1I8WqNzWPFSljNiZcRm7XBIkS3kXlnMz7AE22WpGeEgvVH22CNL3FgoyFTicOFy0cHwKIer5ugK1UbXleiiEU0DQzq7YP19F6QgSWtmMHSfsucDtbm/Q0rsPxq7g4uUB4flXl+n75nn4OL83g2Slw4rI68McM3siefMxIeGOowsHjt/Pm4EmhgfBjjnMO1gGaBAcpTZoQsq2JoBwKpdmCGphoCgUC/01ZX51BPaJEgjeHMM1vasc0KaAbmCjWw0nSCml4Nq3TW+n9sg4Vrmcb4Qmahypc3rTNosVyYKHB1vd1eEDPw3mCv56F3JK3ZXQtXeE/505cYvCeawxbr2bNnZou18XDps1cswPJp81gqWHhdZRw51ZTt60tstNqS0ZFBORIZLC86BdYsaCh1CgH8mBx0G6nC6eUQC9vzWbUEiwXufUVRSWJzhAVh3Gp7NqNDqzlZCjSiVjeo85YqWNRO0TlodmQSsHDFycBY0GEucWAnIn150zoDwbvXY/xzAVEeLMuij3U7NT54v7t259Pbf0KwvNWmOcb6MdGSDXrm/Yvbb//ZIngn++qJNYHlx2JaHq5k3U1pwcfSaPu9Fxme7lFdoRaUneEK6Yc95vwqGL3nU1oWK1TQS2UoV+AIWUwl0JGhIIwfFLKQCQO/Eq3MUmtkwupbUsFSofOhCZ7QFdJ3FIvFTEM/nykhzyxU7PKmdczphqDU80g9uPU2gh5PQ/I2dr27Da/U8EyQbuj+r/IUwWoQcz3WFfJsaFT46hdv//a+RboBriA2J2aA5eNxbU00DJffnk9to46NR19lMIgKD50onm0CoT08Cyys4IyMrlXO42Qh/FPBCrRJFl1ggM4995W2tgBaNVgW9VhxGlpxfGaVVcYgUDnNiKlPE32qMB53Thq8azLmo8umhLw2h7h6adM6hgUqJqSuJAUlySsFq8FesCf1pEavAQeLXq/efnyCNHVvbY1OFQZdHiKZ8ljXTk4Wh9IN9/+8aZUgRV9IDY0KlrPsdIQx7MBMT0ktci+rTGxzo2ppfUbFnC6ed7vjRoGMj0u70+mh/bbK+NGNfnFYQZqq6WBhaYzS6XQU5XhGUZS+WiXDDBaxKnpPanPQRrqBFrhHomk3aEsdFWbYGh215n2SdIOmpYH0ulGVxWlADZJ2bhnBuOgNSncljyQl4GvN6+kBZA2UBAf19haZ9zvaqNC1UiQrRub9xjPybHkoj7UJYJ1YvDyemWQNLGfEievsiRNToTl69rUICwAbVUeFw6vwUDH7djweN3MUpxo4mXThwhiw5HwtBZaIxVjZfCvb78iyrEAQH5Lb2Y66woLxVSMdi/RoxrxKR3XqNPUQxo9Zz2M5I+Zm9hOkuowSZJqEHU7IGwHYBX2hafKv0ZV2u8XdrtQAV9gL1tF6eYp4a3jC5u747nZ1sDwrYtM0V7j8PplfPpUg3bR6eUlmslSw9OB8Hw0QW2sYVy+tbW7kklXqRxzxidb2+ipsnV94dJMUmiwVrJAihGbAC6IzDLU7oUOZCHQvhwILtFqpsdVYqJJBlvahJsNmjChYsYi+1DAC73xisIYKaJIjR4oXntYxTJCY8NB1pi78opG8h/1L6MkGi9idls3oYD0mTcBKq3lfbpLXrg6BZVU2Q/B0Y5RlCt6paOZ0j8ZUUfUEREZPQ7CcT4RzOO0JPs2IgyW7x+bylXxeEIRUlk7lzLDaPoiwFPlwhgXsLSHP7FTL0mARupcAmCYMpPU8r483DdxY1ONT0wYchxsRTgxWxfB99DobveTwor7QlEovnlVACsNDYwrautCPcnWP1mOtPBaJtHDjhlbod0Ie3Ji7ri5Y3dywUehH6BW2fdpiVbjwjpuL4F11PFMaNwsBkX4Yw5KIhcImRZzhMBceX/59THduoJXtdIow0G63FVk+bGs59hZbcgh8DUVY/3am/viXv/71b3/5g+nIyy/9wJB67KUf/A2a/eCll+H+D7//Q62p5amkSg+NA92jwbrouNBUmtzzngWW4Qgty7FoaXLvA+UpNX03Vx6A86yuMLCuLT6CR+8/o0vs5z77/cPNTYtyLKptrEObZZl3IzrPaIvBkyyEd4+fhIhtx/mtXJnfQvHDKpml7WGw54ynrcqS8gop5EkbYiqBcnV42IHw/VjfW6YlQEAPgViLHA/95N+/d5a+z3TWMfNx8yP96I9snEtirvhj413fyLTphceFuybvdhZZCdPzdyy3iRGDWJGlsL0bVhZWpBPxsbaYYnnxzfebrOZ948nth/etF1OgeM7pi+3g+q4d0wddyaQpST58BhfYW8/HpyeaWXU7LRrU5FarLytyoRXqsyL3mRmlc3wMx2hwpSg0rBKU/nH7cHiHrLMt1uSa2GIZIZZ6wrZGm6wLzheKZvfWGPaGXhcujlY3dKhbhO6o3WD387e/fOphq3RuLszfMq3SWbw+d50usX/4xT8eztkxWKCco2wRdgNXNux2ZqKlvWkrsPo4dQNfoU5WkFnkHuorQioUyNbY0+j+lCyd4Ak9p525J42xYqdS6/6RFuvCE9Hq+q96r4G7+QXNRgvidmqjusxS2Vyweu/jj70uz+iV0GixfvvqfRsRFpUv6iiPfY879ja4vVywUjjp3KaVDQrJBvqHHbmmlpOGUiRVCMyEcMoHnsm3AT/LQeH5NClYO0bsrh0a5Qsn2gvjbFEHV01Uq12cdC4GE7go0OPxehN00b3Yq9YlbLdra8/Iu561oLrbzGiwsNDPYjrHkA+GLmNWZGVsbpx8uWDlQ3Qxajsw0+8UUqQgyyyzAMarn68J8DTWu3cCgU5NLnQ6z2lb7knBiutVkfos89KI/Y0cF18Q3URLhCE627yBNIuNbrfbk1h1XxOw6mJVqd3tZhos8z5yif2cmm6YYFs/3rwb2aBwo257NR6XCxZOOKeIgCks0uoEQuDysnmSSqENaysKbo1FKHeBUFt+bltyv/x3m7GVKv/sDtOsnkyIaYcGNHsJ6ynASO3iJn64YVqwN/Rxi7hpJGYiBmOxsepiaXLid4nEWWBd/fCTdToJfTLJK0xzXPgsfGJwvTltJlwmA8sqeKdLUyHGyrYVOZ8NzMhgnGZqtfyMls4KHGKOtB9CtLIWmxh9a3V0RKRGHXdZKzaa5mlmMdEVixLeEa1HhPoPBT2upx89+fKjxGmwrv7ynxC22994TVNsFdCKD80y+7HOz3a6JVPedtvWdsli70kYB4bAaPVZ4UwIHCFdTw+h10wom8Vq5XYrT1ptuY8Pss9xS+6vtXZ3SbGKtqna6AXBQDWr1TohngbBSegu7hxpnytKVuKD20/OtFiv3n7yKnBlK9MwID/+8Zzw0jabmYn507R6tGR/6JIZEUyM0HiLlcrOhGpYNaqwOF4gtQBOROMhcHwCjd0Lx1gBkZID6sLV76KKuAkpIOWpdhsQv0uJYq9Beo0qCRLJ26B7304gsZv4+IMPnqLFuvnee2qClE1Cf/LP32xOsAWpWZW4c/Czz6UnGRFXZifT2M5Y7H6MC59xmU5fbsuBwGG+gNtDFlo1BfjqHNbaoSxWy8zQEeJ3VPU7TdLouRrNRkNs9Jpe3OK9S7y4v21T3J1w02RMiCVojLXw9PN3v0Kw5t/5v18uYvD+4dz68jn2jWeqpJeibMyyH5+9cMH/BYSZK3qLO6uBrZJbwFg7L7RhGEhSggJ8CayVArAFZl7gS33REg92idgkUlVqgOnyNsABuqRel6C5Osffpqi6aAXpwhu3n3xwC8D66du33/0Kwbq+MeEfEPhaqh0KHaJDDIWOMVsFQ8JQIC/UlGwgdAzh/DF9GtOktAa+/93+y4X1O0cikURJOmmwQSLcSKR+YCPffpYk/JMnK/969ylarFv/evfJV2Cxrq4/O7e5+jpJlun8MnzDXIIgdxSaxkopCl1JLysKC9dbnXa78931g5rqBwc4M1itErp1UZU0jxC2c0qUVuYX5r+apzHWjQ/fAWs19+a3AqupJpZYPLizW6zXm/X63SO4a1F/ZaWm9Hge//IXzkAvzr95rph9qm+LmvVi8eioePeS/hJm8+QBqHpZf1dzqqmmmmqqqaaaaqqppppqqqmmmmqqqaaaaqqppprqW6z/B1I6qeJHnAZ0AAAAAElFTkSuQmCC"
        />
        <Card.Body>
          <Card.Title> ADD MEDICINE</Card.Title>
          <Card.Text>Add medicine in your Shop DataBase</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              setShowForm((prev) => !prev);
            }}
          >
            Open Form
          </Button>
          <div
            style={{
              marginTop: "30px",
            }}
          >
            {showForm && (
              <Form>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Medicine Name"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Medicine Description"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="number"
                      placeholder="Enter Medicine Price"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      style={{ width: "100px" }}
                      type="number"
                      placeholder="Qty."
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Row>
              </Form>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddForm;
