describe ('Navegacion', ()=> {
    it ('Navegar a nuestra primer página', ()=> {
        cy.visit('https://www.platzi.com')
    })

    it ('Recargar página', ()=> {
        cy.reload()
    })

    it ('Recargar página de forma forzada', ()=> {
        cy.visit('https://www.google.com')
        cy.reload(true)
    })

    it('Navegar hacia atrás', ()=> {
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=595089826&rlz=1C1CHBF_esCO1088CO1088&sxsrf=AM9HkKmlgAkHqJqoWgERvqHVTg50w5MaqA%3A1704205649761&ei=UR2UZaLdLaCsmtkPoLesGA&ved=0ahUKEwjiyYLj9L6DAxUgliYFHaAbCwMQ4dUDCBA&uact=5&oq=platzi&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnBsYXR6aTIKECMYgAQYigUYJzILEC4YgAQYxwEY0QMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIaEC4YgAQYxwEY0QMYlwUY3AQY3gQY4ATYAQRIoB1QtAZY-RlwAngBkAEBmAHEAaABjg6qAQQwLjExuAEDyAEA-AEBqAISwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAhMQLhiABBiKBRhDGMgDGLAD2AEBwgIHECMY6gIYJ8ICBxAuGOoCGCfCAhMQABiABBiKBRhDGOoCGLQC2AECwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBA8ICCxAAGIAEGIoFGJECwgIFEC4YgATCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARjRA8ICChAuGIAEGIoFGEPCAg0QLhiABBiKBRhDGNQC4gMEGAAgQYgGAZAGDLoGBAgBGAi6BgYIAhABGAG6BgYIAxABGAi6BgYIBBABGBQ&sclient=gws-wiz-serp')
        cy.go('back')
    })

     it.only('Navegar hacia adelante', ()=> {
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=595089826&rlz=1C1CHBF_esCO1088CO1088&sxsrf=AM9HkKmlgAkHqJqoWgERvqHVTg50w5MaqA%3A1704205649761&ei=UR2UZaLdLaCsmtkPoLesGA&ved=0ahUKEwjiyYLj9L6DAxUgliYFHaAbCwMQ4dUDCBA&uact=5&oq=platzi&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnBsYXR6aTIKECMYgAQYigUYJzILEC4YgAQYxwEY0QMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIaEC4YgAQYxwEY0QMYlwUY3AQY3gQY4ATYAQRIoB1QtAZY-RlwAngBkAEBmAHEAaABjg6qAQQwLjExuAEDyAEA-AEBqAISwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAhMQLhiABBiKBRhDGMgDGLAD2AEBwgIHECMY6gIYJ8ICBxAuGOoCGCfCAhMQABiABBiKBRhDGOoCGLQC2AECwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBA8ICCxAAGIAEGIoFGJECwgIFEC4YgATCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARjRA8ICChAuGIAEGIoFGEPCAg0QLhiABBiKBRhDGNQC4gMEGAAgQYgGAZAGDLoGBAgBGAi6BgYIAhABGAG6BgYIAxABGAi6BgYIBBABGBQ&sclient=gws-wiz-serp')
        cy.go('back')
        cy.go('forward')
    })
})